import { StyleSheet, Text, View , FlatList} from 'react-native'
import React from 'react'
import { stackScreens } from '../stacks/HomeStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type propsType = NativeStackScreenProps<stackScreens, 'SongChords'>

const SongChordsScreen = (props : propsType) => {
  const {navigation} = props;
  const {intro, pattern,chords, lyrics} = props.route.params
 // console.warn(chords)  // ["C", "G", "Am", "F"] 
 // console.warn(lyrics) // ["Lyric line 1", "Lyric line 2", "Lyric line 3", "Lyric line 4"] 

 const renderListItem = ({ item, index }: { item: string; index: number })=> (
  <View style={styles.itemContainer}>
    <Text style={styles.chordText}>{chords[index]}</Text>
    <Text style={styles.lyricText}>{item}</Text>
  </View>
);

  return (
    <View style={{marginHorizontal:12, marginTop:10}}>
  <View style={{marginVertical:5, marginLeft:9,padding:5, borderBottomWidth: 1,borderBottomColor: '#ddd',}}>
    <Text style={{color:'skyblue', fontWeight:'bold'}}>Pattern: {pattern ? pattern : 'coming soon'}</Text>
    <Text style={{color:'orange',fontWeight:'bold'}}>Intro: {intro? intro : 'coming soon'}</Text>
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
    color:'red'
  },
  lyricText: {
    fontSize: 16,
    color:'green',
  fontStyle:'italic',
  textAlign:'justify'
  },
});
