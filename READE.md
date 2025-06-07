# Secure Video Player App

This is a secure, mobile-friendly video player built using **Expo (React Native)** for the MEL Labs internship assessment. It features dynamic watermarking, screenshot detection, playback restrictions in secure mode, and a clean UI.

---

## Features Implemented

###  Security
-  Dynamic watermark (username + timestamp, updates every 30s)
-  Watermark shuffles position to prevent cropping
-  Screenshot detection with alert + pause
-  Screenshot count tracking (session-wise)

###  Video Player
-  Plays `.mp4` videos (web & mobile compatible)
-  Full playback controls (play/pause, seek, volume)
-  Fullscreen support
-  Replaces native controls in `secureMode` with:
  - 5s rewind
  - ▶/⏸ play-pause

### Additional Features
-  Settings screen for watermark + secureMode toggle
-  Status screen shows:
  - Screenshot protection ON/OFF
  - Watermark settings
  - Screenshot count

---

## 🛠 Tech Stack

- React Native (Expo)
- `expo-av` for video playback
- `expo-media-library` for screenshot polling
- React Context API for global state management

---

##  Setup Instructions

Clone the repository:

```bash
git clone https://github.com/AmitVaishnav22/capabl.git
cd secure-video-app

Install dependencies:

bash
Copy
Edit
npm install
Run the app:

bash
Copy
Edit
npx expo start
For web testing: press w

For device: scan QR with Expo Go app

How to Test Screenshot Detection
Screenshot detection only works on real devices (not web or emulator)

Run the app on a physical device using Expo Go

Play the video in Player Screen

Take a screenshot

The app will:

Show a warning popup

Pause the video

Increment screenshot attempt count

Known Limitations
Screenshot detection is a workaround using MediaLibrary; native prevention is not possible on Expo.

Fast-forward restriction based on manual position checking.

Does not support local file uploads (sample video only).

Demo Video
Watch Demo
(Duration: ~3 minutes)

Author
Amit Vaishnav
LinkedIn
Built for MEL Labs Internship Assessment
