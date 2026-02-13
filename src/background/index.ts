import { initDB } from '@storage/idb-client';
import { handleMessage } from './message-handler';
import { setupContextMenus } from './context-menu';

let dbInitialized = false;

// Initialize database when service worker starts
initDB()
  .then(() => {
    dbInitialized = true;
    console.log('[Jobs Pilot] Database initialized');
  })
  .catch((error) => {
    console.error('[Jobs Pilot] CRITICAL: Database initialization failed:', error);
    // Try to recover by retrying once
    setTimeout(() => {
      initDB()
        .then(() => {
          dbInitialized = true;
          console.log('[Jobs Pilot] Database initialized on retry');
        })
        .catch((retryError) => {
          console.error('[Jobs Pilot] Database initialization failed on retry:', retryError);
        });
    }, 1000);
  });

// Set up message listener
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Check if DB is ready for operations that need it
  if (!dbInitialized && message?.type && !['GET_SETTINGS', 'PING'].includes(message.type)) {
    console.warn('[Jobs Pilot] Database not yet initialized, message may fail:', message.type);
  }

  handleMessage(message, sender)
    .then(sendResponse)
    .catch((error) => {
      console.error('[Jobs Pilot] Message handler error:', error);
      sendResponse({ success: false, error: error?.message || 'Unknown error' });
    });

  // Return true to indicate async response
  return true;
});

// Set up context menus
chrome.runtime.onInstalled.addListener(() => {
  setupContextMenus();
  console.log('[Jobs Pilot] Extension installed/updated');
});

// Handle extension icon click when no popup
chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.tabs.sendMessage(tab.id, { type: 'TOGGLE_SIDEBAR' })
      .catch((error) => {
        // Tab might not have content script loaded (e.g., chrome:// pages)
        console.log('[Jobs Pilot] Could not toggle sidebar:', error?.message || 'Content script not available');
      });
  }
});

console.log('[Jobs Pilot] Background service worker started');
