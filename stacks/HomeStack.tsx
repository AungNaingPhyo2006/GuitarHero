import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import DetailsScreen from '../pages/DetailsScreen';
import SongChordsScreen from '../pages/SongChordsScreen';

export type ScreenOptions = {
  headerShown: boolean;
};

export type stackScreens = {
    Home : undefined,
    Details : {artistName : string ,}, 
    SongChords : { pattern:string, intro:string,chords : string[] , lyrics : string[],} , 
}
const Stack = createNativeStackNavigator<stackScreens>();

const HomeStack = () => {
    return (
        <Stack.Navigator
          initialRouteName="Home"
         screenOptions={{
          // headerShown: false
          headerTitleAlign:'center',
          headerStyle: { backgroundColor:'skyblue'}
        }}
          >
          <Stack.Screen
            name="Home"
            component={HomeScreen} 
         />
          <Stack.Screen
            name="Details"
            component={DetailsScreen} 
            />
            <Stack.Screen
            name="SongChords"
            component={SongChordsScreen} 
            />
        </Stack.Navigator>
    );
}

export default HomeStack

const styles = StyleSheet.create({})