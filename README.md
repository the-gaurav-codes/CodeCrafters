# SocialFocus - Take Control of Your Social Media Usage


## Developed by **CODECRAFTERS**

A Chrome extension that helps users track and manage their time spent on social media platforms.

---

## Meet the Team

- **GAURAV** (Team Leader) 
- **ISHA** 
- **BHOOMI** 

---

## About SocialFocus

Have you ever lost track of time scrolling through your social media feeds? We certainly have. That's why we created SocialFocus - a simple yet powerful tool to help you be more mindful of your online habits.

SocialFocus tracks the time you spend on popular social media platforms like Facebook, Instagram, and YouTube. It provides a clean, easy-to-understand interface that shows your daily usage statistics along with motivational quotes to encourage healthier browsing habits.

### Key Features

- **Automatic Time Tracking**: Precisely monitors time spent on Facebook, Instagram, and YouTube
- **Daily Statistics**: Shows total time and breakdown by platform
- **Modern UI**: Clean and intuitive interface with smooth animations
- **Motivational Quotes**: Random inspirational quotes to keep you motivated
- **Daily Reset**: Stats reset at midnight to give you a fresh start each day
- **Manual Reset Option**: Reset your stats anytime with a single click

## Screenshots

*![image](https://github.com/user-attachments/assets/0b16881a-8919-4477-afd5-e79ee7c34b23)
*

## Technical Details

SocialFocus is built using web technologies:

- **HTML/CSS**: For the popup interface and styling
- **JavaScript**: For time tracking logic and user interactions
- **Chrome Extension API**: For tab monitoring and data persistence
- **Manifest V3**: Latest extension manifest version for better performance and security

## Installation

### For Users
1. Download the extension from the Chrome Web Store (coming soon)
2. Click "Add to Chrome" to install
3. Click the SocialFocus icon in your toolbar to view your statistics

### For Developers
1. Clone this repository or download the ZIP file
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top-right corner
4. Click "Load unpacked" and select the SocialFocus folder
5. The extension should now appear in your extensions list

## File Structure

```
SocialFocus/
│
├── manifest.json       # Extension configuration file
├── background.js       # Background script for time tracking
├── popup.html          # HTML for the popup interface
├── popup.css           # Styles for the popup interface
├── popup.js            # JavaScript for the popup functionality
│
└── icons/              # Folder containing all icons
    ├── icon16.png      # Extension icon (16x16 pixels)
    ├── icon48.png      # Extension icon (48x48 pixels)
    ├── icon128.png     # Extension icon (128x128 pixels)
    └── logo.png        # Logo image shown in the popup
```

## How It Works

1. The background script continuously monitors tab activity
2. When a tracked site is detected, the timer starts
3. Time data is stored locally in your browser
4. The popup displays your usage statistics when clicked
5. Stats automatically reset at midnight for fresh daily tracking

## Future Enhancements

We're not stopping here! Here are some features we're planning to add:

- Custom time limits and alerts
- Weekly and monthly usage reports
- Support for additional social media platforms
- Theme customization options
- Data export capabilities

## Privacy

SocialFocus respects your privacy. All data is stored locally on your device and is never transmitted to external servers. We only request the minimum permissions necessary for the extension to function properly.

## Contributing

We welcome contributions! If you have ideas for improvements or bug fixes, please:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## Feedback

This is our first Chrome extension, and we'd love to hear your thoughts! Please reach out with any suggestions or issues.

---

Created with ❤️ by **CODECRAFTERS** during our Web Development Hackathon, 2025.
