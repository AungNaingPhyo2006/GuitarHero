import { Camera } from 'lucide-react-native';
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Alert
} from 'react-native';
import { artists } from '../constants/artist';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackScreens } from '../stacks/HomeStack';
type  propsType = NativeStackScreenProps<stackScreens, 'Home'>
const HomeScreen = (props: propsType) => {
const {navigation} = props;
  const renderArtistItem = ({ item }: { item: { id: number; name: string } }) => (
    <TouchableOpacity 
    onPress={() => {
      navigation.navigate('Details' , { artistName :  item.name})
     }}
      style={{ padding: 10 , borderWidth:1, margin:12, width:'80%', borderRadius:5,alignItems:'center'}}>
      <Text >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
// <=======================>
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            marginHorizontal:12,
            padding:12,
          
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            You are on Home Screen
          </Text>
   <View>
   <FlatList
      data={artists}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderArtistItem}
    />
   </View>
         
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          Music is the shorthand of emotion.
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.anp.com
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal:12,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default HomeScreen;

{/* <TouchableOpacity
style={styles.button}
onPress={
  () => navigation.navigate(
    'SettingsStack', { screen: 'Settings' }
  )}>
<Text>Go to setting Tab</Text>
</TouchableOpacity>
<TouchableOpacity
style={styles.button}
onPress={
  () => navigation.navigate('Details')
}>
<Text>Open Details Screen</Text>
</TouchableOpacity> */}