import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SettingsScreen from '../pages/SettingsScreen';
import ProfileScreen from '../pages/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const SettingsStack = () => {
    return (
        <Stack.Navigator
          initialRouteName="Settings"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Settings"
            component={SettingsScreen} />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen} />
        </Stack.Navigator>
      );
}

export default SettingsStack

const styles = StyleSheet.create({})