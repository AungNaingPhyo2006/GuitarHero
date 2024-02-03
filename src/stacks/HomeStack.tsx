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
    HomeScreen : undefined,
    Details : {artistName : string ,}, 
    SongChords : { youtube: string[] ,note: string[],pattern:string, intro:string,chords : string[] , lyrics : string[],} , 
}
const Stack = createNativeStackNavigator<stackScreens>();

const HomeStack = () => {
    return (
        <Stack.Navigator
          initialRouteName="HomeScreen"
         screenOptions={{
          animation:'slide_from_bottom',
          // headerShown: false
          headerTitleAlign:'center',
          headerStyle: { backgroundColor:'skyblue'}
        }}
          >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen} 
            options={{headerShown:false}}
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