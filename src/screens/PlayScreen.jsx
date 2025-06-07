import React, { useEffect, useRef, useContext,useState } from 'react';
import { Alert } from 'react-native';
import { ScreenShotDetector } from './utils/ScreenShotDetector';
import VideoPlayer from '../components/VideoPlayer';
import { SettingsContext } from '../context/SettingsContext';

function PlayScreen() {
  const videoRef = useRef(null);

  const {
    username,
    screenshotCount,
    setScreenshotCount,
    secureMode,
  } = useContext(SettingsContext);

  const [lastPosition, setLastPosition] = useState(0);

  useEffect(() => {
    const stopDetection = ScreenShotDetector({
      onScreenshotDetected: () => {
        setScreenshotCount(prev => prev + 1);
        Alert.alert("Security Warning", "Screenshot detected! Please avoid capturing content.");
        if (videoRef.current) videoRef.current.pauseAsync();
      }
    });

    return () => stopDetection(); // cleanup
  }, []);

  const handlePlaybackStatusUpdate = (status) => {
    if (!status.isLoaded) return;

    // Restrict fast-forward (> 2x speed)
    if (secureMode && Math.abs(status.positionMillis - lastPosition) > 2000 * (status.playableDurationMillis / 1000)) {
      videoRef.current.setPositionAsync(lastPosition);
      Alert.alert("Restricted", "Fast-forward is limited in secure mode.");
    }

    setLastPosition(status.positionMillis);
  };

  return (
    <VideoPlayer
      source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
      watermarkText={username || 'Anonymous'}
      videoRef={videoRef}
      onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      secureMode={secureMode}
    />
  );
}

export default PlayScreen;