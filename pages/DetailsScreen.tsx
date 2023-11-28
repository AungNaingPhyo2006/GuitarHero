import * as React from 'react';
import { View, Text, SafeAreaView , TouchableOpacity, StyleSheet} from 'react-native';
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
         //   flex: 1,
          //  alignItems: 'center',
         //   justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            You are on Details Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          Music is the dream not expensive.
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.anp.com
        </Text>
        <TouchableOpacity
    style={styles.button}
    onPress={
     () => navigation.goBack(
     )}>
      <Text>Go Back</Text>
      </TouchableOpacity>
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
export default DetailsScreen;