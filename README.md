# Secure Video Player App

A secure, mobile-friendly video player built using **Expo (React Native)** for the MEL Labs internship assessment.
Features dynamic watermarking, screenshot detection, playback restrictions in secure mode, and a clean UI.

---

## Features

###  Security

* Dynamic watermark with username and timestamp (updates every 30s)
* Watermark shuffles position periodically to prevent cropping
* Screenshot detection with:

  * Warning popup
  * Automatic video pause
  * Session-based screenshot count tracking

###  Video Player

* Supports `.mp4` playback (web and mobile compatible)
* Full native playback controls:

  * Play/Pause
  * Seek bar
  * Volume control
  * Fullscreen support
* Secure Mode (Custom Controls):

  *  Rewind 10s/5s
  * ▶/⏸ Play/Pause toggle

###  Additional Screens

* **Settings Screen**:

  * Toggle watermark
  * Toggle secure mode
* **Status Screen**:

  * Screenshot protection ON/OFF
  * Current watermark info
  * Screenshot count

---

## 🛠 Tech Stack

| Area                 | Tool                 |
| -------------------- | -------------------- |
| Frontend             | Expo (React Native)  |
| Video Playback       | `expo-av`            |
| Screenshot Detection | `expo-media-library` |
| State Management     | React Context API    |

---

##  Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/AmitVaishnav22/capabl.git
   cd secure-video-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npx expo start
   ```

4. **Testing:**

   * Web: Press `w` in the terminal
   * Mobile: Scan QR code using Expo Go app

---

##  Screenshot Detection Notes

Screenshot detection **only works on physical devices** (not on web or emulators).

To test:

1. Run the app on a real device
2. Go to the video player screen
3. Take a screenshot
4. You should see:

   * A warning popup
   * Video paused
   * Screenshot count incremented

---

## Known Limitations

* Screenshot detection uses polling, not native APIs
* Fast-forward restriction is manually enforced
* No support for user video uploads (uses a fixed sample video)

---

##  Demo

🎥 **Watch Demo** (Duration: \~3 minutes)
\[Demo Link Placeholder]

---

##  Author

**Amit Vaishnav**
[LinkedIn](https://www.linkedin.com/in/amit-vaishnav-678b04236/)
Built for MEL Labs Internship Assessment

---

##  Technical Notes

###  Architecture Decisions

* Used Expo for fast cross-platform development & web testing
* React Context for global state: `username`, `secureMode`, `screenshotCount`
* Main Components:

  * `VideoPlayer`: Handles video, watermark, and secure controls
  * `PlayScreen`: Orchestrates screenshot detection & secure logic
  * `SettingsScreen`: Input for username & toggle secure mode
  * `StatusScreen`: Shows live protection and session info
  * `ScreenShotDetector`: Polls the media library every 3s

###  Security Strategy

####  Dynamic Watermarking

* Shows username + timestamp
* Repositions every 30s to avoid cropping
* Semi-transparent overlay

####  Screenshot Detection

* Uses `expo-media-library` to check for new screenshots
* Shows alert, pauses video, and logs attempt count

#### ⏯ Playback Restrictions

* Native controls disabled in secure mode
* Custom play/pause and rewind buttons shown
* Blocks fast-forward based on playback delta

###  What I’d Improve with More Time

* Use Android `FLAG_SECURE` for native screenshot blocking
* Persist data using `AsyncStorage` or cloud sync
* Support local video selection or upload
* Better error handling and automated testing

---

##  Tested On

*  Web (Chrome, via Expo)
*  Android (Expo Go)
*  iOS not tested (assumed compatible)

