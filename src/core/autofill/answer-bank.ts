/**
 * Answer Bank Service
 * Manages saving, retrieving, and matching answers for autofill
 */

import type { AnswerBank, CommonQuestionType, CachedAnswer } from '@shared/types/master-profile.types';

// Question type patterns for classification
const QUESTION_PATTERNS: Array<{
  type: CommonQuestionType;
  patterns: RegExp[];
  keywords: string[];
}> = [
  {
    type: 'why_interested',
    patterns: [/why.*interested/i, /why.*join/i, /why.*want.*work/i, /why.*apply/i, /why.*this.*company/i, /why.*this.*role/i],
    keywords: ['why', 'interested', 'join', 'apply', 'company', 'role', 'position'],
  },
  {
    type: 'greatest_strength',
    patterns: [/greatest.*strength/i, /your.*strength/i, /best.*quality/i, /strongest.*skill/i],
    keywords: ['strength', 'strongest', 'best', 'quality'],
  },
  {
    type: 'greatest_weakness',
    patterns: [/greatest.*weakness/i, /your.*weakness/i, /area.*improve/i, /development.*area/i],
    keywords: ['weakness', 'improve', 'development', 'challenge'],
  },
  {
    type: 'leadership_example',
    patterns: [/leadership.*example/i, /led.*team/i, /manage.*team/i, /leadership.*experience/i],
    keywords: ['leadership', 'lead', 'led', 'manage', 'team'],
  },
  {
    type: 'teamwork_example',
    patterns: [/teamwork/i, /work.*team/i, /collaborate/i, /team.*project/i],
    keywords: ['teamwork', 'team', 'collaborate', 'together'],
  },
  {
    type: 'challenge_overcome',
    patterns: [/challenge.*overcome/i, /difficult.*situation/i, /problem.*solved/i, /obstacle/i],
    keywords: ['challenge', 'overcome', 'difficult', 'problem', 'obstacle'],
  },
  {
    type: 'why_leaving',
    patterns: [/why.*leaving/i, /reason.*leaving/i, /why.*left/i, /leaving.*current/i],
    keywords: ['leaving', 'left', 'reason', 'current'],
  },
  {
    type: 'salary_expectations',
    patterns: [/salary.*expect/i, /compensation.*expect/i, /desired.*salary/i, /pay.*expect/i],
    keywords: ['salary', 'compensation', 'pay', 'expect'],
  },
  {
    type: 'career_goals',
    patterns: [/career.*goal/i, /where.*see.*yourself/i, /5.*years/i, /future.*plan/i],
    keywords: ['career', 'goal', 'future', 'plan', 'years'],
  },
  {
    type: 'technical_achievement',
    patterns: [/technical.*achievement/i, /proud.*project/i, /best.*project/i, /accomplishment/i],
    keywords: ['achievement', 'proud', 'project', 'accomplishment'],
  },
  {
    type: 'work_style',
    patterns: [/work.*style/i, /how.*you.*work/i, /working.*style/i, /prefer.*work/i],
    keywords: ['work', 'style', 'prefer', 'working'],
  },
  {
    type: 'handle_pressure',
    patterns: [/handle.*pressure/i, /stress/i, /deadline/i, /under.*pressure/i],
    keywords: ['pressure', 'stress', 'deadline', 'handle'],
  },
  {
    type: 'conflict_resolution',
    patterns: [/conflict/i, /disagree/i, /difficult.*coworker/i, /resolve.*issue/i],
    keywords: ['conflict', 'disagree', 'resolve', 'difficult'],
  },
  {
    type: 'diversity_contribution',
    patterns: [/diversity/i, /inclusion/i, /diverse.*team/i, /contribute.*culture/i],
    keywords: ['diversity', 'inclusion', 'culture', 'contribute'],
  },
];

/**
 * Classify a question into a known type
 */
export function classifyQuestion(questionText: string): CommonQuestionType | null {
  const lowerText = questionText.toLowerCase();

  // Check patterns first (more accurate)
  for (const { type, patterns } of QUESTION_PATTERNS) {
    for (const pattern of patterns) {
      if (pattern.test(lowerText)) {
        return type;
      }
    }
  }

  // Fall back to keyword matching
  for (const { type, keywords } of QUESTION_PATTERNS) {
    const matchCount = keywords.filter(kw => lowerText.includes(kw)).length;
    if (matchCount >= 2) {
      return type;
    }
  }

  return null;
}

/**
 * Find a matching answer from the answer bank
 */
export function findMatchingAnswer(
  questionText: string,
  answerBank: AnswerBank,
  companyName?: string
): string | null {
  // 1. Check exact custom answers first
  for (const [pattern, answer] of Object.entries(answerBank.customAnswers || {})) {
    if (new RegExp(pattern, 'i').test(questionText)) {
      // Replace company placeholder if present
      return companyName ? answer.replace(/\{company\}/gi, companyName) : answer;
    }
  }

  // 2. Classify the question and look for cached answers
  const questionType = classifyQuestion(questionText);
  if (questionType && answerBank.commonQuestions) {
    const cached = answerBank.commonQuestions.find(q => q.questionType === questionType);
    if (cached) {
      return companyName ? cached.answer.replace(/\{company\}/gi, companyName) : cached.answer;
    }
  }

  // 3. Look for similar questions by keyword matching
  if (answerBank.commonQuestions) {
    const lowerText = questionText.toLowerCase();
    for (const cached of answerBank.commonQuestions) {
      const cachedLower = cached.question.toLowerCase();
      // Simple similarity check - share significant words
      const questionWords = lowerText.split(/\s+/).filter(w => w.length > 3);
      const cachedWords = cachedLower.split(/\s+/).filter(w => w.length > 3);
      const commonWords = questionWords.filter(w => cachedWords.includes(w));
      if (commonWords.length >= 2) {
        return companyName ? cached.answer.replace(/\{company\}/gi, companyName) : cached.answer;
      }
    }
  }

  return null;
}

/**
 * Save a new answer to the answer bank
 */
export function addAnswerToBank(
  questionText: string,
  answer: string,
  answerBank: AnswerBank
): AnswerBank {
  const updatedBank = { ...answerBank };

  // Classify the question
  const questionType = classifyQuestion(questionText);

  if (questionType) {
    // Add to common questions
    if (!updatedBank.commonQuestions) {
      updatedBank.commonQuestions = [];
    }

    // Check if we already have an answer for this type
    const existingIndex = updatedBank.commonQuestions.findIndex(
      q => q.questionType === questionType
    );

    const newAnswer: CachedAnswer = {
      questionType,
      question: questionText,
      answer,
      generatedAt: new Date(),
      usageCount: 1,
    };

    if (existingIndex >= 0) {
      // Update existing
      updatedBank.commonQuestions[existingIndex] = newAnswer;
    } else {
      // Add new
      updatedBank.commonQuestions.push(newAnswer);
    }
  } else {
    // Not a recognized type - save as custom answer
    if (!updatedBank.customAnswers) {
      updatedBank.customAnswers = {};
    }

    // Create a pattern from the question
    // Extract key words for matching
    const keyWords = questionText
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 3)
      .slice(0, 5)
      .join('.*');

    if (keyWords) {
      updatedBank.customAnswers[keyWords] = answer;
    }
  }

  return updatedBank;
}

/**
 * Get suggested answer with company customization
 */
export function getSuggestedAnswer(
  questionText: string,
  answerBank: AnswerBank,
  context: {
    companyName?: string;
    jobTitle?: string;
    profileSummary?: string;
  }
): { answer: string | null; source: 'bank' | 'ai' | null; confidence: number } {
  // Try to find from answer bank
  const bankAnswer = findMatchingAnswer(questionText, answerBank, context.companyName);

  if (bankAnswer) {
    return {
      answer: bankAnswer,
      source: 'bank',
      confidence: 0.8,
    };
  }

  // No answer found - will need AI generation
  return {
    answer: null,
    source: null,
    confidence: 0,
  };
}

/**
 * Generate default answers for new profiles
 */
export function generateDefaultAnswerBank(
  profileContext: {
    name: string;
    title: string;
    yearsExperience: number;
    skills: string[];
    summary?: string;
  }
): AnswerBank {
  const { title, yearsExperience, skills, summary } = profileContext;
  const topSkills = skills.slice(0, 5).join(', ');

  return {
    commonQuestions: [
      {
        questionType: 'why_interested',
        question: 'Why are you interested in this role?',
        answer: `With ${yearsExperience} years of experience as a ${title}, I'm excited about the opportunity to bring my expertise in ${topSkills} to {company}. I'm particularly drawn to roles where I can make a meaningful impact while continuing to grow professionally.`,
        generatedAt: new Date(),
        usageCount: 0,
      },
      {
        questionType: 'greatest_strength',
        question: 'What is your greatest strength?',
        answer: `My greatest strength is my ability to combine technical expertise with strong problem-solving skills. With ${yearsExperience} years of experience working with ${topSkills}, I've developed a systematic approach to tackling complex challenges while delivering practical solutions.`,
        generatedAt: new Date(),
        usageCount: 0,
      },
      {
        questionType: 'career_goals',
        question: 'Where do you see yourself in 5 years?',
        answer: `In 5 years, I see myself as a senior technical leader, having deepened my expertise in ${topSkills} while mentoring others and contributing to impactful projects. I'm looking for a role at {company} that offers growth opportunities aligned with this vision.`,
        generatedAt: new Date(),
        usageCount: 0,
      },
      {
        questionType: 'work_style',
        question: 'Describe your work style.',
        answer: `I'm a collaborative professional who values clear communication and structured problem-solving. I enjoy working in agile environments where I can contribute ideas while learning from teammates. I'm self-motivated but also thrive in team settings.`,
        generatedAt: new Date(),
        usageCount: 0,
      },
    ],
    patterns: QUESTION_PATTERNS.map(p => ({
      type: p.type,
      patterns: p.patterns.map(r => r.source),
      keywords: p.keywords,
    })),
    customAnswers: {
      'anything.*else|additional.*info': summary || `I'm a ${title} with ${yearsExperience} years of experience specializing in ${topSkills}. I'm excited about opportunities where I can contribute to meaningful projects while continuing to grow.`,
      'interview.*availab': 'I am available for interviews at your earliest convenience during business hours.',
      'hear.*about|how.*find': 'I found this position through an online job board.',
    },
  };
}
