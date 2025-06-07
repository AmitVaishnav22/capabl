import Reac,{useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SettingsContext } from '../context/SettingsContext';

function StatusScreen() {
  const {
    screenshotProtectionEnabled,
    username,
    secureMode,
    screenshotCount,
  } = useContext(SettingsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Watermark User: {username || 'Anonymous'}</Text>
      <Text style={styles.label}>Secure Mode: {secureMode ? 'ON' : 'OFF'}</Text>
      <Text style={styles.label}>
        Screenshot Protection: {screenshotProtectionEnabled ? 'ON' : 'OFF'}
      </Text>
      <Text style={styles.label}>
        Screenshot Attempts This Session: {screenshotCount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 16, marginBottom: 10 },
});

export default StatusScreen;
