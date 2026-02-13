/**
 * Self-Improving Learning Engine
 * Tracks application outcomes and learns to improve recommendations
 *
 * Key features:
 * - Tracks which keywords lead to callbacks/interviews
 * - Learns from successful vs unsuccessful applications
 * - Automatically adjusts keyword importance weights
 * - Identifies patterns in successful applications
 * - Provides increasingly personalized recommendations
 */

export interface ApplicationOutcome {
  id: string;
  jobId: string;
  profileId: string;
  appliedAt: Date;
  platform: string;
  jobTitle: string;
  company: string;

  // What was used in the application
  keywordsUsed: string[];
  skillsHighlighted: string[];
  summaryUsed: string;
  coverLetterGenerated: boolean;
  atsScoreAtApplication: number;

  // Outcomes (updated over time)
  status: ApplicationStatus;
  viewedByRecruiter?: boolean;
  viewedAt?: Date;
  callbackReceived?: boolean;
  callbackAt?: Date;
  interviewScheduled?: boolean;
  interviewAt?: Date;
  offerReceived?: boolean;
  offerAt?: Date;
  rejected?: boolean;
  rejectedAt?: Date;
  rejectionReason?: string;

  // Calculated metrics
  responseTimeHours?: number;
  successScore: number; // 0-100 based on outcome
}

export type ApplicationStatus =
  | 'applied'
  | 'viewed'
  | 'callback'
  | 'interview_scheduled'
  | 'interviewed'
  | 'offer'
  | 'accepted'
  | 'rejected'
  | 'withdrawn'
  | 'no_response';

export interface KeywordPerformance {
  keyword: string;
  timesUsed: number;
  successCount: number; // Callbacks or better
  interviewCount: number;
  offerCount: number;
  successRate: number; // 0-1
  avgResponseTime: number; // hours
  platformPerformance: Record<string, { used: number; success: number }>;
  lastUpdated: Date;
  trend: 'improving' | 'stable' | 'declining';
}

export interface LearningInsights {
  topPerformingKeywords: KeywordPerformance[];
  underperformingKeywords: KeywordPerformance[];
  optimalKeywordCount: number;
  bestPerformingPlatforms: string[];
  optimalApplicationTime: string; // e.g., "Tuesday 10am"
  avgTimeToResponse: number;
  successRateByProfile: Record<string, number>;
  improvementSuggestions: ImprovementSuggestion[];
}

export interface ImprovementSuggestion {
  type: 'keyword' | 'skill' | 'format' | 'timing' | 'platform';
  priority: 'high' | 'medium' | 'low';
  suggestion: string;
  reasoning: string;
  expectedImpact: string;
  confidence: number; // 0-1 based on data points
}

export interface LearningState {
  keywordPerformance: Record<string, KeywordPerformance>;
  applicationHistory: ApplicationOutcome[];
  insights: LearningInsights;
  lastAnalyzed: Date;
  totalApplications: number;
  totalResponses: number;
  overallSuccessRate: number;
}

const STORAGE_KEY = 'learningEngine';
const SUCCESS_WEIGHTS = {
  viewed: 10,
  callback: 30,
  interview_scheduled: 50,
  interviewed: 60,
  offer: 100,
  accepted: 100,
  rejected: 0,
  no_response: 0,
  applied: 0,
  withdrawn: 0,
};

/**
 * Self-Improving Learning Engine
 */
export class SelfImproveEngine {
  private state: LearningState;
  private initialized = false;

  constructor() {
    this.state = this.getDefaultState();
  }

  private getDefaultState(): LearningState {
    return {
      keywordPerformance: {},
      applicationHistory: [],
      insights: {
        topPerformingKeywords: [],
        underperformingKeywords: [],
        optimalKeywordCount: 15,
        bestPerformingPlatforms: [],
        optimalApplicationTime: 'Unknown',
        avgTimeToResponse: 0,
        successRateByProfile: {},
        improvementSuggestions: [],
      },
      lastAnalyzed: new Date(),
      totalApplications: 0,
      totalResponses: 0,
      overallSuccessRate: 0,
    };
  }

  /**
   * Initialize engine from storage
   */
  async init(): Promise<void> {
    if (this.initialized) return;

    try {
      const result = await chrome.storage.local.get(STORAGE_KEY);
      if (result[STORAGE_KEY]) {
        this.state = {
          ...this.getDefaultState(),
          ...result[STORAGE_KEY],
        };
      }
      this.initialized = true;
    } catch (error) {
      console.error('Failed to load learning state:', error);
      this.initialized = true;
    }
  }

  /**
   * Save state to storage
   */
  private async saveState(): Promise<void> {
    try {
      await chrome.storage.local.set({ [STORAGE_KEY]: this.state });
    } catch (error) {
      console.error('Failed to save learning state:', error);
    }
  }

  /**
   * Track a new application
   */
  async trackApplication(application: Omit<ApplicationOutcome, 'id' | 'successScore'>): Promise<string> {
    await this.init();

    const id = crypto.randomUUID();
    const outcome: ApplicationOutcome = {
      ...application,
      id,
      successScore: 0,
    };

    this.state.applicationHistory.push(outcome);
    this.state.totalApplications++;

    // Update keyword usage counts
    for (const keyword of application.keywordsUsed) {
      const normalized = keyword.toLowerCase();
      if (!this.state.keywordPerformance[normalized]) {
        this.state.keywordPerformance[normalized] = this.createKeywordPerformance(keyword);
      }
      this.state.keywordPerformance[normalized].timesUsed++;
      this.state.keywordPerformance[normalized].lastUpdated = new Date();

      // Track platform-specific performance
      const platform = application.platform.toLowerCase();
      if (!this.state.keywordPerformance[normalized].platformPerformance[platform]) {
        this.state.keywordPerformance[normalized].platformPerformance[platform] = { used: 0, success: 0 };
      }
      this.state.keywordPerformance[normalized].platformPerformance[platform].used++;
    }

    await this.saveState();
    return id;
  }

  /**
   * Update application outcome
   */
  async updateOutcome(
    applicationId: string,
    update: Partial<ApplicationOutcome>
  ): Promise<void> {
    await this.init();

    const index = this.state.applicationHistory.findIndex((a) => a.id === applicationId);
    if (index === -1) return;

    const application = this.state.applicationHistory[index];
    const oldStatus = application.status;

    // Update the application
    this.state.applicationHistory[index] = {
      ...application,
      ...update,
      successScore: this.calculateSuccessScore(update.status || application.status),
    };

    const newStatus = update.status || application.status;

    // If status improved, update keyword performance
    if (this.isSuccessStatus(newStatus) && !this.isSuccessStatus(oldStatus)) {
      this.state.totalResponses++;
      this.updateKeywordSuccess(application.keywordsUsed, application.platform, newStatus);

      // Calculate response time
      if (update.callbackAt || update.interviewAt || update.viewedAt) {
        const responseDate = update.callbackAt || update.interviewAt || update.viewedAt;
        if (responseDate) {
          const responseTime = (responseDate.getTime() - application.appliedAt.getTime()) / (1000 * 60 * 60);
          this.state.applicationHistory[index].responseTimeHours = responseTime;
        }
      }
    }

    // Recalculate overall success rate
    this.state.overallSuccessRate = this.state.totalResponses / Math.max(1, this.state.totalApplications);

    await this.saveState();

    // Trigger analysis if we have enough data
    if (this.state.totalApplications % 10 === 0) {
      await this.analyzeAndImprove();
    }
  }

  /**
   * Main analysis function - learns from data
   */
  async analyzeAndImprove(): Promise<LearningInsights> {
    await this.init();

    // Need minimum data to provide insights
    if (this.state.totalApplications < 5) {
      return this.state.insights;
    }

    // Analyze keyword performance
    const keywordStats = Object.values(this.state.keywordPerformance)
      .filter((k) => k.timesUsed >= 3) // Need enough data
      .map((k) => ({
        ...k,
        successRate: k.successCount / Math.max(1, k.timesUsed),
      }))
      .sort((a, b) => b.successRate - a.successRate);

    // Top performing keywords
    this.state.insights.topPerformingKeywords = keywordStats
      .filter((k) => k.successRate > 0.3)
      .slice(0, 10);

    // Underperforming keywords
    this.state.insights.underperformingKeywords = keywordStats
      .filter((k) => k.successRate < 0.1 && k.timesUsed >= 5)
      .slice(0, 5);

    // Calculate optimal keyword count
    const successfulApps = this.state.applicationHistory.filter((a) =>
      this.isSuccessStatus(a.status)
    );
    if (successfulApps.length > 0) {
      const avgKeywords = successfulApps.reduce((sum, a) => sum + a.keywordsUsed.length, 0) / successfulApps.length;
      this.state.insights.optimalKeywordCount = Math.round(avgKeywords);
    }

    // Best performing platforms
    const platformStats = this.calculatePlatformStats();
    this.state.insights.bestPerformingPlatforms = Object.entries(platformStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([platform]) => platform);

    // Optimal application time
    this.state.insights.optimalApplicationTime = this.findOptimalApplicationTime();

    // Average response time
    const responseTimes = this.state.applicationHistory
      .filter((a) => a.responseTimeHours !== undefined)
      .map((a) => a.responseTimeHours!);
    if (responseTimes.length > 0) {
      this.state.insights.avgTimeToResponse = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
    }

    // Success rate by profile
    this.state.insights.successRateByProfile = this.calculateProfileStats();

    // Generate improvement suggestions
    this.state.insights.improvementSuggestions = this.generateSuggestions();

    // Update keyword trends
    this.updateKeywordTrends();

    this.state.lastAnalyzed = new Date();
    await this.saveState();

    return this.state.insights;
  }

  /**
   * Get smart keyword recommendations based on learning
   */
  async getSmartKeywordRecommendations(
    jobKeywords: string[],
    platform: string
  ): Promise<{
    recommended: string[];
    avoid: string[];
    reasoning: string[];
  }> {
    await this.init();

    const recommended: string[] = [];
    const avoid: string[] = [];
    const reasoning: string[] = [];

    for (const keyword of jobKeywords) {
      const normalized = keyword.toLowerCase();
      const performance = this.state.keywordPerformance[normalized];

      if (!performance || performance.timesUsed < 3) {
        // Not enough data - include it
        recommended.push(keyword);
        continue;
      }

      // Check platform-specific performance
      const platformPerf = performance.platformPerformance[platform.toLowerCase()];
      const platformSuccessRate = platformPerf
        ? platformPerf.success / Math.max(1, platformPerf.used)
        : performance.successRate;

      if (platformSuccessRate >= 0.2 || performance.trend === 'improving') {
        recommended.push(keyword);
        if (performance.trend === 'improving') {
          reasoning.push(`"${keyword}" is trending upward in success rate`);
        }
      } else if (performance.timesUsed >= 10 && performance.successRate < 0.05) {
        avoid.push(keyword);
        reasoning.push(`"${keyword}" has low success rate (${(performance.successRate * 100).toFixed(0)}%) - consider alternatives`);
      } else {
        recommended.push(keyword);
      }
    }

    // Add top performing keywords that match job
    for (const topKeyword of this.state.insights.topPerformingKeywords.slice(0, 5)) {
      const relatedToJob = jobKeywords.some(
        (jk) => jk.toLowerCase().includes(topKeyword.keyword.toLowerCase()) ||
               topKeyword.keyword.toLowerCase().includes(jk.toLowerCase())
      );
      if (relatedToJob && !recommended.includes(topKeyword.keyword)) {
        recommended.push(topKeyword.keyword);
        reasoning.push(`"${topKeyword.keyword}" has ${(topKeyword.successRate * 100).toFixed(0)}% success rate`);
      }
    }

    return { recommended, avoid, reasoning };
  }

  /**
   * Get auto-improvement suggestions for a profile
   */
  async getAutoImprovements(profileId: string): Promise<ImprovementSuggestion[]> {
    await this.init();
    await this.analyzeAndImprove();

    const suggestions: ImprovementSuggestion[] = [];

    // Get profile-specific applications
    const profileApps = this.state.applicationHistory.filter((a) => a.profileId === profileId);

    if (profileApps.length < 5) {
      suggestions.push({
        type: 'keyword',
        priority: 'medium',
        suggestion: 'Apply to more jobs to enable personalized recommendations',
        reasoning: 'Need at least 5 applications to identify patterns',
        expectedImpact: 'Better keyword and strategy recommendations',
        confidence: 1,
      });
      return suggestions;
    }

    // Analyze profile-specific patterns
    const profileSuccessRate = profileApps.filter((a) => this.isSuccessStatus(a.status)).length / profileApps.length;

    // Keywords used in successful applications
    const successfulApps = profileApps.filter((a) => this.isSuccessStatus(a.status));
    const successKeywords = new Set(successfulApps.flatMap((a) => a.keywordsUsed.map((k) => k.toLowerCase())));

    // Keywords used in unsuccessful applications
    const unsuccessfulApps = profileApps.filter((a) => a.status === 'no_response' || a.status === 'rejected');
    const failKeywords = new Set(unsuccessfulApps.flatMap((a) => a.keywordsUsed.map((k) => k.toLowerCase())));

    // Find keywords that work
    const workingKeywords = [...successKeywords].filter((k) => {
      const perf = this.state.keywordPerformance[k];
      return perf && perf.successRate > 0.25;
    });

    if (workingKeywords.length > 0) {
      suggestions.push({
        type: 'keyword',
        priority: 'high',
        suggestion: `Prioritize these high-performing keywords: ${workingKeywords.slice(0, 5).join(', ')}`,
        reasoning: `These keywords have shown ${'>'}25% success rate in your applications`,
        expectedImpact: 'Higher callback rate',
        confidence: Math.min(profileApps.length / 20, 1),
      });
    }

    // Find keywords to avoid
    const avoidKeywords = [...failKeywords].filter((k) => {
      const perf = this.state.keywordPerformance[k];
      return perf && perf.timesUsed >= 5 && perf.successRate < 0.05 && !successKeywords.has(k);
    });

    if (avoidKeywords.length > 0) {
      suggestions.push({
        type: 'keyword',
        priority: 'medium',
        suggestion: `Consider alternatives to: ${avoidKeywords.slice(0, 3).join(', ')}`,
        reasoning: 'These keywords have shown low success rate',
        expectedImpact: 'Avoid wasting keyword space on underperforming terms',
        confidence: Math.min(profileApps.length / 20, 1),
      });
    }

    // Platform recommendations
    const platformStats = this.calculatePlatformStats();
    const bestPlatform = Object.entries(platformStats).sort(([, a], [, b]) => b - a)[0];
    if (bestPlatform && bestPlatform[1] > profileSuccessRate) {
      suggestions.push({
        type: 'platform',
        priority: 'medium',
        suggestion: `Focus more on ${bestPlatform[0]} - it has your highest success rate`,
        reasoning: `${(bestPlatform[1] * 100).toFixed(0)}% success rate vs ${(profileSuccessRate * 100).toFixed(0)}% overall`,
        expectedImpact: 'Higher overall success rate',
        confidence: 0.7,
      });
    }

    // Keyword count optimization
    const avgKeywordsSuccess = successfulApps.length > 0
      ? successfulApps.reduce((sum, a) => sum + a.keywordsUsed.length, 0) / successfulApps.length
      : 0;
    const avgKeywordsFail = unsuccessfulApps.length > 0
      ? unsuccessfulApps.reduce((sum, a) => sum + a.keywordsUsed.length, 0) / unsuccessfulApps.length
      : 0;

    if (avgKeywordsSuccess > 0 && Math.abs(avgKeywordsSuccess - avgKeywordsFail) > 3) {
      suggestions.push({
        type: 'keyword',
        priority: 'medium',
        suggestion: `Aim for ${Math.round(avgKeywordsSuccess)} keywords in your resume`,
        reasoning: `Successful applications averaged ${Math.round(avgKeywordsSuccess)} keywords vs ${Math.round(avgKeywordsFail)} for unsuccessful`,
        expectedImpact: 'Better keyword optimization',
        confidence: Math.min(successfulApps.length / 10, 1),
      });
    }

    // Add general insights
    suggestions.push(...this.state.insights.improvementSuggestions.slice(0, 3));

    return suggestions;
  }

  // =====================================
  // Helper Methods
  // =====================================

  private createKeywordPerformance(keyword: string): KeywordPerformance {
    return {
      keyword,
      timesUsed: 0,
      successCount: 0,
      interviewCount: 0,
      offerCount: 0,
      successRate: 0,
      avgResponseTime: 0,
      platformPerformance: {},
      lastUpdated: new Date(),
      trend: 'stable',
    };
  }

  private calculateSuccessScore(status: ApplicationStatus): number {
    return SUCCESS_WEIGHTS[status] || 0;
  }

  private isSuccessStatus(status: ApplicationStatus): boolean {
    return ['viewed', 'callback', 'interview_scheduled', 'interviewed', 'offer', 'accepted'].includes(status);
  }

  private updateKeywordSuccess(keywords: string[], platform: string, status: ApplicationStatus): void {
    for (const keyword of keywords) {
      const normalized = keyword.toLowerCase();
      if (!this.state.keywordPerformance[normalized]) continue;

      const perf = this.state.keywordPerformance[normalized];

      if (this.isSuccessStatus(status)) {
        perf.successCount++;
      }
      if (['interview_scheduled', 'interviewed', 'offer', 'accepted'].includes(status)) {
        perf.interviewCount++;
      }
      if (['offer', 'accepted'].includes(status)) {
        perf.offerCount++;
      }

      perf.successRate = perf.successCount / Math.max(1, perf.timesUsed);

      // Update platform performance
      const platformPerf = perf.platformPerformance[platform.toLowerCase()];
      if (platformPerf && this.isSuccessStatus(status)) {
        platformPerf.success++;
      }
    }
  }

  private calculatePlatformStats(): Record<string, number> {
    const stats: Record<string, { total: number; success: number }> = {};

    for (const app of this.state.applicationHistory) {
      const platform = app.platform.toLowerCase();
      if (!stats[platform]) {
        stats[platform] = { total: 0, success: 0 };
      }
      stats[platform].total++;
      if (this.isSuccessStatus(app.status)) {
        stats[platform].success++;
      }
    }

    return Object.fromEntries(
      Object.entries(stats).map(([platform, data]) => [
        platform,
        data.success / Math.max(1, data.total),
      ])
    );
  }

  private calculateProfileStats(): Record<string, number> {
    const stats: Record<string, { total: number; success: number }> = {};

    for (const app of this.state.applicationHistory) {
      if (!stats[app.profileId]) {
        stats[app.profileId] = { total: 0, success: 0 };
      }
      stats[app.profileId].total++;
      if (this.isSuccessStatus(app.status)) {
        stats[app.profileId].success++;
      }
    }

    return Object.fromEntries(
      Object.entries(stats).map(([profile, data]) => [
        profile,
        data.success / Math.max(1, data.total),
      ])
    );
  }

  private findOptimalApplicationTime(): string {
    const successfulApps = this.state.applicationHistory.filter((a) =>
      this.isSuccessStatus(a.status) && a.appliedAt
    );

    if (successfulApps.length < 5) return 'Not enough data';

    // Group by day of week and hour
    const dayHourStats: Record<string, number> = {};

    for (const app of successfulApps) {
      const date = new Date(app.appliedAt);
      const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
      const hour = date.getHours();
      const timeSlot = hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening';
      const key = `${day} ${timeSlot}`;
      dayHourStats[key] = (dayHourStats[key] || 0) + 1;
    }

    const best = Object.entries(dayHourStats).sort(([, a], [, b]) => b - a)[0];
    return best ? best[0] : 'Weekday mornings';
  }

  private updateKeywordTrends(): void {
    const now = Date.now();
    const thirtyDaysAgo = now - (30 * 24 * 60 * 60 * 1000);
    const sixtyDaysAgo = now - (60 * 24 * 60 * 60 * 1000);

    for (const perf of Object.values(this.state.keywordPerformance)) {
      // Calculate recent vs older performance
      const recentApps = this.state.applicationHistory.filter(
        (a) => new Date(a.appliedAt).getTime() > thirtyDaysAgo &&
               a.keywordsUsed.map((k) => k.toLowerCase()).includes(perf.keyword.toLowerCase())
      );

      const olderApps = this.state.applicationHistory.filter(
        (a) => new Date(a.appliedAt).getTime() > sixtyDaysAgo &&
               new Date(a.appliedAt).getTime() <= thirtyDaysAgo &&
               a.keywordsUsed.map((k) => k.toLowerCase()).includes(perf.keyword.toLowerCase())
      );

      if (recentApps.length < 3 || olderApps.length < 3) {
        perf.trend = 'stable';
        continue;
      }

      const recentRate = recentApps.filter((a) => this.isSuccessStatus(a.status)).length / recentApps.length;
      const olderRate = olderApps.filter((a) => this.isSuccessStatus(a.status)).length / olderApps.length;

      if (recentRate > olderRate + 0.1) {
        perf.trend = 'improving';
      } else if (recentRate < olderRate - 0.1) {
        perf.trend = 'declining';
      } else {
        perf.trend = 'stable';
      }
    }
  }

  private generateSuggestions(): ImprovementSuggestion[] {
    const suggestions: ImprovementSuggestion[] = [];

    // Based on overall success rate
    if (this.state.overallSuccessRate < 0.1 && this.state.totalApplications >= 10) {
      suggestions.push({
        type: 'keyword',
        priority: 'high',
        suggestion: 'Your response rate is low - try matching job descriptions more closely',
        reasoning: `Only ${(this.state.overallSuccessRate * 100).toFixed(0)}% of applications getting responses`,
        expectedImpact: 'Significantly higher response rate',
        confidence: 0.8,
      });
    }

    // Based on top keywords
    if (this.state.insights.topPerformingKeywords.length > 0) {
      const topKeyword = this.state.insights.topPerformingKeywords[0];
      suggestions.push({
        type: 'keyword',
        priority: 'medium',
        suggestion: `Include "${topKeyword.keyword}" when relevant - it's your best performer`,
        reasoning: `${(topKeyword.successRate * 100).toFixed(0)}% success rate`,
        expectedImpact: 'Higher callback rate',
        confidence: Math.min(topKeyword.timesUsed / 10, 1),
      });
    }

    // Based on declining keywords
    const declining = Object.values(this.state.keywordPerformance).filter((k) => k.trend === 'declining');
    if (declining.length > 0) {
      suggestions.push({
        type: 'skill',
        priority: 'low',
        suggestion: `Some skills may be becoming less in-demand: ${declining.slice(0, 2).map((k) => k.keyword).join(', ')}`,
        reasoning: 'Success rate declining over the past 30 days',
        expectedImpact: 'Consider upskilling or emphasizing other skills',
        confidence: 0.6,
      });
    }

    return suggestions;
  }
}

// Singleton instance
let engineInstance: SelfImproveEngine | null = null;

export function getLearningEngine(): SelfImproveEngine {
  if (!engineInstance) {
    engineInstance = new SelfImproveEngine();
  }
  return engineInstance;
}
