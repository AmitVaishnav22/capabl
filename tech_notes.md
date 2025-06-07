
---

#  `tech_notes.md`

```md
# Technical Notes – Secure Video App

## 🏛 Architecture Decisions

- **Expo (React Native)** was chosen for its fast setup, cross-platform support, and ease of deployment.
- Used **React Context API** for managing global settings like `username`, `secureMode`, and `screenshotCount`.
- **Component Structure**:
  - `VideoPlayer`: Core video component with watermark overlay + secure mode handling
  - `PlayScreen`: Orchestrates screenshot detection and playback restriction
  - `SettingsScreen`: Updates watermark and security toggle
  - `StatusScreen`: Shows real-time session info
  - `ScreenShotDetector`: Utility polling `MediaLibrary` every 3s

---

##  Security Approach

- **Dynamic Watermarking**:
  - Watermark contains username + timestamp
  - Changes position every 30 seconds to avoid cropping
  - Semi-transparent overlay styled via `rgba`

- **Screenshot Detection**:
  - Uses `expo-media-library` to scan new screenshots every 3 seconds
  - Displays warning + pauses video
  - Updates screenshot count via context

- **Playback Restrictions (Secure Mode)**:
  - Disables native controls
  - Replaces with custom play/pause and 10s rewind
  - Blocks excessive fast-forwarding by monitoring playback delta

---

## What I’d Improve With More Time

- Switch to native build and use native screenshot detection APIs (e.g., Android `FLAG_SECURE`)
- Add persistent storage using `AsyncStorage` or backend sync
- Support user video uploads or video list picker
- Improve test coverage and error handling

---

## Notes

- Tested on Web and Android using Expo Go
- Used `uri`-based video source for web compatibility
- Designed UI to be clean and mobile-friendly with touch-safe buttons
