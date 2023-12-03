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
      style={styles.button}>
      <Text style={{color:'red',fontWeight:'bold', fontSize:18, marginLeft:12}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
// <=======================>
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1,  marginHorizontal:12,}}>
        <View
          style={{
            marginVertical:9,
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
              fontWeight:'bold'
            }}>
            Your Artists List
          </Text>         
        </View>
        <FlatList
      data={artists}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderArtistItem}
    />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal:12,
    // alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
    // width: 300,
    marginTop: 16,
    marginBottom:5,
    borderRadius:5,
    elevation:5
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