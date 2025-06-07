import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

export default function VideoPlayer({ source, watermarkText, videoRef, onPlaybackStatusUpdate, secureMode }) {
  const [status, setStatus] = useState({});
  const [timestamp, setTimestamp] = useState(Date.now());
  const [watermarkPosition, setWatermarkPosition] = useState({ top: '40%', left: '25%' });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());
      const positions = [
        { top: '10%', left: '10%' },
        { top: '40%', left: '25%' },
        { top: '70%', left: '60%' },
        { top: '30%', left: '70%' },
        { top: '50%', left: '40%' }
      ];
      setWatermarkPosition(positions[Math.floor(Math.random() * positions.length)]);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handlePlayPause = async () => {
    if (!videoRef.current) return;
    const currentStatus = await videoRef.current.getStatusAsync();
    currentStatus.isPlaying ? videoRef.current.pauseAsync() : videoRef.current.playAsync();
  };

  const handleRewind = async () => {
    if (!videoRef.current) return;
    const currentStatus = await videoRef.current.getStatusAsync();
    const newPos = Math.max(0, currentStatus.positionMillis - 5000); 
    await videoRef.current.setPositionAsync(newPos);
  };
  const handleFoward = async () => {
    if (!videoRef.current) return;
    const currentStatus = await videoRef.current.getStatusAsync();
    const newPos = Math.min(currentStatus.durationMillis, currentStatus.positionMillis + 5000); 
    await videoRef.current.setPositionAsync(newPos);
  }

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={source}
        resizeMode="contain"
        useNativeControls={!secureMode}
        isLooping
        onPlaybackStatusUpdate={(status) => {
          setStatus(status);
          onPlaybackStatusUpdate?.(status);
        }}
      />

      {/* Watermark */}
      <Text style={[styles.watermark, watermarkPosition]}>
        {`${watermarkText} - ${new Date(timestamp).toLocaleTimeString()}`}
      </Text>

      {/* Secure Mode Controls */}
      {secureMode && (
        <View style={styles.controls}>
          <TouchableOpacity onPress={handleRewind} style={styles.button}>
            <Text style={styles.buttonText}> Rewind 5s</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFoward} style={styles.button}>
            <Text style={styles.buttonText}> Foward 5s</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlayPause} style={styles.button}>
            <Text style={styles.buttonText}>
              {status.isPlaying ? '⏸ Pause' : '▶ Play'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { position: 'relative', width: '100%', height: 330 },
  video: { width: '100%', height: 300 },
  watermark: {
    position: 'absolute',
    color: 'rgba(255,255,255,0.4)',
    fontSize: 14,
    fontWeight: 'bold',
    zIndex: 1,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});


