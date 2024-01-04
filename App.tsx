

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             This is <Text style={styles.highlight}>App.tsx</Text> and to play TypeScript.
//           </Section>
        
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;


import * as React from 'react';

import 
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CodePush from 'react-native-code-push';
// import HomeScreen from './pages/HomeScreen';
// import DetailsScreen from './pages/DetailsScreen';
// import ProfileScreen from './pages/ProfileScreen';
// import SettingsScreen from './pages/SettingsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Home, Music, Music2 } from 'lucide-react-native';
import HomeStack from './src/stacks/HomeStack';
import SettingsStack from './src/stacks/SettingsStack';
import { AuthProvider } from "./src/constants/MyContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

function App() : JSX.Element {
  return (
    <AuthProvider>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#42f44b',},
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' , },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
          if (route.name === 'HomeStack') {
            return focused? <Home size={size} color='blue'/> :<Home size={size} color={color}/>
          } else if (route.name === 'SettingsStack') {
            return focused? <Music size={size} color='blue'/> :<Music size={size} color={color}/>
          }
          }
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            // tabBarLabel: 'Home',
            // title: 'Home',
            // headerTitleAlign:'center'
            headerShown:false
          }}  
          />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            // tabBarLabel: 'Settings',
            // title: 'Setting'
            headerShown:false
          }} />
      </Tab.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}
export default CodePush(App);
