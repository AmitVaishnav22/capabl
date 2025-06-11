import * as MediaLibrary from 'expo-media-library';

let lastCheckedTime = Date.now(); // start with current time and update on detection

const ScreenShotDetector = ({ onScreenshotDetected }) => {
  const intervalId = setInterval(async () => {
    try {
      const { assets } = await MediaLibrary.getAssetsAsync({
        first: 1,
        mediaType: 'photo',
        sortBy: 'creationTime',
      });

      if (!assets || assets.length === 0) return;

      const latest = assets[0];

      if (
        latest.creationTime > lastCheckedTime &&
        latest.filename.toLowerCase().includes('screenshot')
      ) {
        lastCheckedTime = latest.creationTime;
        onScreenshotDetected?.();
      }
    } catch (error) {
      console.error('Screenshot detection failed:', error);
    }
  }, 3000); // every 3s

  return () => clearInterval(intervalId); // for cleanup
};

export { ScreenShotDetector };
