import * as React from 'react';
import { View, Text, SafeAreaView , TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { stackScreens } from '../stacks/HomeStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { artists } from '../constants/artist';

type propsType = NativeStackScreenProps<stackScreens, "Details">
const DetailsScreen = (props : propsType)  => {
  const {navigation, route} = props;
  const {artistName} = route.params;


  // Define types for the data structure
  type Song = {
    id: number;
    title: string;
    pattern:string;
    intro:string;
    youtube:string;
    lyrics: string[];
    chords: string[];
  };

  const getArtistData = artists.find((artist) => artist.name === artistName);
  const songsArray: Song[] = getArtistData ? getArtistData.songs : [];
  //  console.warn(songsArray[0].chords/title/lyrics)
  // <==============>
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
       marginVertical:9
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
              fontWeight:'bold'
            }}>
            Song List         
          </Text>
        </View>
      <FlatList
      data={songsArray}
      keyExtractor={(item : Song , index : number )=> item.id.toString()}
      renderItem={({item})=> 
      <TouchableOpacity  style={styles.button}
      onPress={
        () => navigation.navigate('SongChords', {youtube : item.youtube,pattern : item.pattern,intro: item.intro,chords : item.chords , lyrics : item.lyrics})}
        >
        <Text style={{color:'blue'}}>{item.title}</Text>
      </TouchableOpacity>}
      />
      </View>
     
    </SafeAreaView>
  );
}

DetailsScreen.options =  {
  headerShown :false
}
const styles = StyleSheet.create({
  button: {
    marginHorizontal:12,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
    // width: 300,
    marginTop: 16,
    marginBottom:5,
    borderRadius:5,
    elevation:5
  },
});
export default DetailsScreen;