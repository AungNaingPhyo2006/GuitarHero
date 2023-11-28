import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import DetailsScreen from '../pages/DetailsScreen';
export type stackScreens = {
    Home : undefined,
    Details : {artistName : string},
}
const Stack = createNativeStackNavigator<stackScreens>();

const HomeStack = () => {
    return (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}
          >
          <Stack.Screen
            name="Home"
            component={HomeScreen} />
          <Stack.Screen
            name="Details"
            component={DetailsScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack

const styles = StyleSheet.create({})