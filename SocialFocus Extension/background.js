const trackedSites = [
  { domain: "facebook.com", name: "Facebook", color: "#4267B2" },
  { domain: "instagram.com", name: "Instagram", color: "#E1306C" },
  { domain: "youtube.com", name: "YouTube", color: "#FF0000" }
];

let currentSite = null;
let startTime = null;

chrome.runtime.onInstalled.addListener(() => {
  const today = new Date().toDateString();
  
  chrome.storage.local.get(['siteData', 'lastReset'], (result) => {
    if (!result.siteData) {
      const initialSiteData = {};
      trackedSites.forEach(site => {
        initialSiteData[site.domain] = {
          totalTime: 0,
          name: site.name,
          color: site.color
        };
      });
      
      chrome.storage.local.set({ 
        siteData: initialSiteData,
        lastReset: today
      });
    }
  });
  
  chrome.alarms.create('dailyReset', {
    periodInMinutes: 60 * 24
  });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'dailyReset') {
    const today = new Date().toDateString();
    
    chrome.storage.local.get(['lastReset'], (result) => {
      if (result.lastReset !== today) {
        resetAllStats();
        chrome.storage.local.set({ lastReset: today });
      }
    });
  }
});


chrome.tabs.onActivated.addListener(activeInfo => {
  checkCurrentSite(activeInfo.tabId);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    checkCurrentSite(tabId);
  }
});

function checkCurrentSite(tabId) {
  chrome.tabs.get(tabId, (tab) => {
    if (chrome.runtime.lastError) return;
    

    if (currentSite && startTime) {
      updateTimeForSite(currentSite, Date.now() - startTime);
      currentSite = null;
      startTime = null;
    }
    
    if (tab.url && tab.active) {
      const url = new URL(tab.url);
      const domain = url.hostname.replace('www.', '');
      
      for (const site of trackedSites) {
        if (domain.includes(site.domain)) {
          currentSite = site.domain;
          startTime = Date.now();
          break;
        }
      }
    }
  });
}

function updateTimeForSite(domain, timeSpent) {
  chrome.storage.local.get(['siteData'], (result) => {
    const siteData = result.siteData || {};
    
    if (siteData[domain]) {
      siteData[domain].totalTime += timeSpent;
      chrome.storage.local.set({ siteData });
    }
  });
}

chrome.windows.onFocusChanged.addListener((windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    if (currentSite && startTime) {
      updateTimeForSite(currentSite, Date.now() - startTime);
      currentSite = null;
      startTime = null;
    }
  } else {

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        checkCurrentSite(tabs[0].id);
      }
    });
  }
});


function resetAllStats() {
  chrome.storage.local.get(['siteData'], (result) => {
    const siteData = result.siteData || {};
    
    for (const domain in siteData) {
      siteData[domain].totalTime = 0;
    }
    
    chrome.storage.local.set({ siteData });
  });
}