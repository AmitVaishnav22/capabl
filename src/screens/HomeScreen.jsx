import React from 'react'
import { View, Button } from 'react-native';
function HomeScreen({navigation}) {
    return (
        <View>
        <Button title="Play Video" onPress={() => navigation.navigate("Player")} />
        <Button title="Settings" onPress={() => navigation.navigate("Settings")} />
        <Button title="Security Status" onPress={() => navigation.navigate("Status")} />
        </View>
    );
}

export default HomeScreen