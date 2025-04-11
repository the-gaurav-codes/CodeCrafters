document.addEventListener('DOMContentLoaded', function() {
  loadSiteData();
  

  document.getElementById('resetBtn').addEventListener('click', resetStats);
  

  displayRandomQuote();
});

function loadSiteData() {
  chrome.storage.local.get(['siteData'], (result) => {
    const siteData = result.siteData || {};
    const sitesList = document.getElementById('sitesList');
    sitesList.innerHTML = '';
    
    let totalTimeMs = 0;
    const sitesArray = [];
    
    for (const domain in siteData) {
      sitesArray.push({
        domain,
        name: siteData[domain].name,
        color: siteData[domain].color,
        totalTime: siteData[domain].totalTime
      });
      totalTimeMs += siteData[domain].totalTime;
    }
    

    sitesArray.sort((a, b) => b.totalTime - a.totalTime);
    
    displayTotalTime(totalTimeMs);
    
    sitesArray.forEach(site => {
      if (site.totalTime > 0) {
        const siteElement = createSiteElement(site);
        sitesList.appendChild(siteElement);
      }
    });
    
    if (sitesArray.every(site => site.totalTime === 0)) {
      const noDataElement = document.createElement('div');
      noDataElement.classList.add('no-data');
      noDataElement.textContent = 'No social media usage tracked today';
      sitesList.appendChild(noDataElement);
    }
  });
}

function createSiteElement(site) {
  const siteItem = document.createElement('div');
  siteItem.classList.add('site-item');
  
  const timeFormatted = formatTime(site.totalTime);
  
  siteItem.innerHTML = `
    <div class="site-info">
      <div class="site-icon" style="background-color: ${site.color}">
        ${site.name.charAt(0)}
      </div>
      <div class="site-name">${site.name}</div>
    </div>
    <div class="site-time">${timeFormatted}</div>
  `;
  
  return siteItem;
}

function displayTotalTime(totalTimeMs) {
  const hours = Math.floor(totalTimeMs / (1000 * 60 * 60));
  const minutes = Math.floor((totalTimeMs % (1000 * 60 * 60)) / (1000 * 60));
  
  document.getElementById('totalHours').textContent = hours;
  document.getElementById('totalMinutes').textContent = minutes;
}

function formatTime(timeMs) {
  const hours = Math.floor(timeMs / (1000 * 60 * 60));
  const minutes = Math.floor((timeMs % (1000 * 60 * 60)) / (1000 * 60));
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes} min`;
  }
}

function resetStats() {
  if (confirm('Reset all social media usage statistics?')) {
    chrome.storage.local.get(['siteData'], (result) => {
      const siteData = result.siteData || {};
      
      for (const domain in siteData) {
        siteData[domain].totalTime = 0;
      }
      
      chrome.storage.local.set({ siteData }, () => {
        loadSiteData(); 
      });
    });
  }
}

function displayRandomQuote() {
  const quotes = [
    {
      text: "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
      author: "Stephen Covey"
    },
    {
      text: "Time is what we want most, but what we use worst.",
      author: "William Penn"
    },
    {
      text: "The bad news is time flies. The good news is you're the pilot.",
      author: "Michael Altshuler"
    },
    {
      text: "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.",
      author: "Paul J. Meyer"
    },
    {
      text: "Focus on being productive instead of busy.",
      author: "Tim Ferriss"
    },
    {
      text: "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      text: "The difference between successful people and very successful people is that very successful people say 'no' to almost everything.",
      author: "Warren Buffett"
    },
    {
      text: "It's not always that we need to do more but rather that we need to focus on less.",
      author: "Nathan W. Morris"
    }
  ];
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('motivationalQuote').textContent = randomQuote.text;
  document.querySelector('.quote-author').textContent = `- ${randomQuote.author}`;
}