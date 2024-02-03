import { Camera } from 'lucide-react-native';
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Alert,
  Image,
  ActivityIndicator
} from 'react-native';
import { artists } from '../constants/artist';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackScreens } from '../stacks/HomeStack';
import { useAuth } from '../constants/MyContext';
type  propsType = NativeStackScreenProps<stackScreens, 'HomeScreen'>
const HomeScreen = (props: propsType) => {
const {navigation} = props;
const { user , setUser} = useAuth();

const [displayedItems, setDisplayedItems] = React.useState(5);
const [isLoading, setIsLoading] = React.useState(false);

const renderFooter = () => {
  if (isLoading) {
    return (
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <TouchableOpacity style={{...styles.button , backgroundColor:'blue'}} onPress={loadMoreData}>
        <Text style={{color:'white',fontSize:18}}>Load More</Text>
      </TouchableOpacity>
    );
  }
};

const loadMoreData = () => {
  // Check if there are more items to load
  if (displayedItems >= artists.length) {
    Alert.alert('No more Artist', 'There are no more artist to load.');
    return;
  }

  // Set loading state to true while data is being fetched
  setIsLoading(true);

  setTimeout(() => {
    setDisplayedItems(displayedItems + 5);
    setIsLoading(false);
  }, 1000); 
};





  const paginatedArtists = artists.slice(0, displayedItems);


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
      <View style={{ flex: 1,  marginHorizontal:0,backgroundColor:'cyan'}}>
        <View
          style={{
            marginVertical:9,
            flexDirection:'row',
            justifyContent:'center'
          }}>
            {/* <Image
            source={require('../assets/images/anp.jpg')}
            style={{width:50,height:50, borderRadius:30,marginHorizontal:12}}
            /> */}
            <View style={{justifyContent:'center',alignItems:'center' , marginVertical:12}}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              // marginBottom: 6,
              // marginTop:9,
              fontWeight:'bold',
              color:'green'
            }}>
            Your Artists List
          </Text> 
          </View>        
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={paginatedArtists}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderArtistItem}
          ListFooterComponent={renderFooter}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal:12,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
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