import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SettingsScreen from '../pages/SettingsScreen';
import ProfileScreen from '../pages/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import KaraokeGame from '../pages/karaoke/KaraokeGame';
import AddPlayer from '../pages/karaoke/AddPlayer';
import GamePlay from '../pages/karaoke/GamePlay';
const Stack = createNativeStackNavigator();

const SettingsStack = () => {
    return (
        <Stack.Navigator
          initialRouteName="SettingsScreen"
          screenOptions={{
            // headerShown: false,
            headerTitleAlign:'center',
            headerStyle: { backgroundColor:'skyblue'},
            animation:'slide_from_bottom'
            }}>
          <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen} />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen} />
             <Stack.Screen
            name="KaraokeGame"
            component={KaraokeGame} />
              <Stack.Screen
            name="AddPlayer"
            component={AddPlayer} />
             <Stack.Screen
            name="GamePlay"
            component={GamePlay} />
        </Stack.Navigator>
      );
}

export default SettingsStack

const styles = StyleSheet.create({})