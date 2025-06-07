import React, { useContext} from 'react';
import { View, TextInput, Text, Switch, StyleSheet, Button } from 'react-native';
import { SettingsContext } from '../context/SettingsContext';

function SettingsScreen({ navigation }) {
  const {
    username,
    setUsername,
    secureMode,
    setSecureMode,
  } = useContext(SettingsContext);

  const handleApply = () => {
    navigation.navigate('Player');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Watermark Username:</Text>
      <TextInput
        placeholder="Enter username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Secure Mode:</Text>
        <Switch value={secureMode} onValueChange={setSecureMode} />
      </View>

      <Button title="Apply Settings & Play" onPress={handleApply} />
    </View>
  );
}

export default SettingsScreen;
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  label: { fontSize: 16, marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
