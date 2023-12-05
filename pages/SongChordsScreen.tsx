import { StyleSheet, Text, View , FlatList, TouchableOpacity, Linking,Alert} from 'react-native'
import React from 'react'
import { stackScreens } from '../stacks/HomeStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type propsType = NativeStackScreenProps<stackScreens, 'SongChords'>

const SongChordsScreen = (props : propsType) => {
  const {navigation} = props;
  const {intro, pattern,chords, lyrics, youtube} = props.route.params
  // console.warn(youtube)
 // console.warn(chords)  // ["C", "G", "Am", "F"] 
 // console.warn(lyrics) // ["Lyric line 1", "Lyric line 2", "Lyric line 3", "Lyric line 4"] 

 const openYouTubeLink = async () => {
  try{
    Linking.openURL(youtube);
  }catch(err){
    Alert.alert('',`An error occurred : ${err}`);
  }

  return
  const youtube1 = "https://www.youtube.com/watch?v=rJQ4ex2XcOo"
  try {
    // Checking if the Linking module is supported
    const supported = await Linking.canOpenURL(youtube1);

    if (supported) {
      // Opening the YouTube link
      await Linking.openURL(youtube1);
    } else {
      Alert.alert('',"Can't open the link");
    }
  } catch (err) {
    Alert.alert('',`An error occurred : ${err}`);
  }
};

 const renderListItem = ({ item, index }: { item: string; index: number })=> (
  <View style={styles.itemContainer}>
    <Text style={styles.chordText}>{'     '}{chords[index]}</Text>
    <Text style={styles.lyricText}>{item}</Text>
    
  </View>
);

  return (
    <View style={{marginHorizontal:12, marginTop:5}}>
    <View style={{marginVertical:5, marginLeft:9,padding:5, borderBottomWidth: 1,borderBottomColor: '#ddd',}}>
    <Text style={{color:'skyblue', fontWeight:'bold'}}>Pattern: {pattern ? pattern : 'coming soon'}</Text>
    <Text style={{color:'orange',fontWeight:'bold'}}>Intro: {intro? intro : 'coming soon'}</Text>
    <TouchableOpacity style={{alignSelf:'flex-end',margin:5, borderWidth:1,padding:5, borderRadius:10,}} onPress={openYouTubeLink}>
        <Text style={{color:'blue',fontWeight:'bold', fontStyle:'italic', }}>Video</Text>
    </TouchableOpacity>
  </View>
      <FlatList
      data={lyrics}
      renderItem={renderListItem}
      contentContainerStyle={{paddingBottom:200}}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
    
    </View>
  )
}

export default SongChordsScreen

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    textAlign:'justify',
    padding: 10,
    marginLeft:9
  },
  chordText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    marginBottom:5,
    color:'red',
    letterSpacing:1.5,
  },
  lyricText: {
    fontSize: 16,
    color:'green',
  fontStyle:'italic',
  textAlign:'justify'
  },
 
});
