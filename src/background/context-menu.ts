export function setupContextMenus(): void {
  // Remove existing menus first
  chrome.contextMenus.removeAll();

  // Create context menu items
  chrome.contextMenus.create({
    id: 'jobs-pilot-save',
    title: 'Save Job with Jobs Pilot',
    contexts: ['page'],
    documentUrlPatterns: [
      '*://www.linkedin.com/jobs/*',
      '*://www.indeed.com/*',
      '*://boards.greenhouse.io/*',
      '*://*.greenhouse.io/*',
      '*://jobs.lever.co/*',
      '*://*.lever.co/*',
      '*://*.myworkdayjobs.com/*',
    ],
  });

  chrome.contextMenus.create({
    id: 'jobs-pilot-analyze',
    title: 'Analyze Job Fit',
    contexts: ['page'],
    documentUrlPatterns: [
      '*://www.linkedin.com/jobs/*',
      '*://www.indeed.com/*',
      '*://boards.greenhouse.io/*',
      '*://*.greenhouse.io/*',
      '*://jobs.lever.co/*',
      '*://*.lever.co/*',
      '*://*.myworkdayjobs.com/*',
    ],
  });

  // Handle context menu clicks
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (!tab?.id) return;

    const handleError = (action: string) => (error: Error) => {
      console.warn(`[Jobs Pilot] Context menu ${action} failed:`, error?.message || 'Content script not available');
    };

    switch (info.menuItemId) {
      case 'jobs-pilot-save':
        chrome.tabs.sendMessage(tab.id, { type: 'SAVE_CURRENT_JOB' })
          .catch(handleError('save'));
        break;
      case 'jobs-pilot-analyze':
        chrome.tabs.sendMessage(tab.id, { type: 'ANALYZE_CURRENT_JOB' })
          .catch(handleError('analyze'));
        break;
    }
  });
}
