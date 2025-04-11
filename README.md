# CodeCrafters

🌐 SocialFocus – A Digital Wellbeing Tracker (Chrome Extension)
Scroll Less. Live More. ✨

SocialFocus is a lightweight, user-friendly Chrome extension that helps you track and control the time you spend on social media. It empowers you to develop healthier online habits and take back control of your time — one scroll at a time.

🚀 Features

⏳ Real-time tracking of social media usage (Facebook, Instagram, YouTube, WhatsApp Web, Twitter/X)

📊 Beautiful popup dashboard with daily time and usage charts

🔔 Smart notifications when you're over your time limit

💬 Motivational quotes while you scroll

🎯 Daily goal setting and streak tracking

🎨 Clean, dark/light mode UI with emojis and animations

⚙️ Custom settings for time limits and quote toggles

🧠 Privacy-first – all data stays in your browser (localStorage only)

📁 File Structure

Here's a breakdown of the main project files:

socialfocus-extension/
├── manifest.json → Chrome extension metadata (v3)
├── background.js → Background logic (tab detection, timers)
├── content.js → Content script (if needed later)
├── popup.html → Main UI popup
├── popup.js → JS logic for popup
├── options.html → Settings/configuration page
├── options.js → JS logic for options page
├── styles.css → TailwindCSS styles
├── quotes.js → List of motivational quotes
└── icons/ → Extension icons (128x128, 48x48, etc.)

📦 Installation (For Local Testing)

Download or clone this repository:
git clone https://github.com/your-username/socialfocus-extension.git

Open Chrome and go to: chrome://extensions/

Enable “Developer Mode” (top right corner)

Click “Load Unpacked” and select the socialfocus-extension/ folder

The SocialFocus icon will now appear in your Chrome toolbar!

🛠️ Tech Stack

HTML + Tailwind CSS

JavaScript

Chart.js (for usage visualization)

Chrome Extension APIs (tabs, storage, notifications)

LocalStorage / chrome.storage

🔐 Permissions Used

tabs – to detect active websites

storage – to save usage data & settings

notifications – to show alerts when you exceed time limits

host_permissions – access to social media sites to track usage

📸 Screenshots (Coming Soon!)

Popup dashboard view

Chart summary

Motivational quote UI

Settings page

✨ Inspiration

Inspired by apps like Forest and StayFocusd, SocialFocus aims to help people — especially students and developers — maintain focus and achieve better time control without sacrificing fun.

📃 License

This project is open-source and available under the MIT License.
