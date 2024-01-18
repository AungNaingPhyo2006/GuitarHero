import { ScrollView,StyleSheet, Text, View , FlatList, TouchableOpacity, Linking,Alert, Animated} from 'react-native'
import React, { useRef, useState } from 'react'
import { stackScreens } from '../stacks/HomeStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ArrowLeft, ChevronDown, ChevronRightSquareIcon, Home, } from 'lucide-react-native';

type propsType = NativeStackScreenProps<stackScreens, 'SongChords'>

const SongChordsScreen = (props : propsType) => {
  const {navigation} = props;
  const {intro, pattern,chords, lyrics, youtube,note} = props.route.params
  // console.warn(youtube)
 // console.warn(chords)  // ["C", "G", "Am", "F"] 
 // console.warn(lyrics) // ["Lyric line 1", "Lyric line 2", "Lyric line 3", "Lyric line 4"] 

 const openYouTubeLink = async (youtubeLink: string) => {
  try{
    Linking.openURL(youtubeLink);
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

const [showOptions, setShowOptions] = useState<boolean>(false);
// <======Start icon Animation=====>
const rotateValue = useRef(new Animated.Value(0)).current;
const handlePress = () => {
  setShowOptions(!showOptions)

  Animated.timing(rotateValue, {
    toValue: showOptions ? 0 : 1,
    duration: 300,
    useNativeDriver: false,
  }).start();
};

const spin = rotateValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '-180deg'],
});

const spinStyle = {
  transform: [{ rotate: spin }],
  width:20,
  height:20,
  borderRadius:10,
  backgroundColor:'blue',
};

// <=======End Animation====>

 const renderListItem = ({ item, index }: { item: string; index: number })=> (
  <View style={styles.itemContainer}>
    <Text style={styles.chordText}>{'     '}{chords[index]}</Text>
    <Text style={styles.lyricText}>{item}</Text>

  </View>
);

  return (
    <View style={{marginHorizontal:0, marginTop:0, backgroundColor:'skyblue'}}>
      
    <ScrollView showsVerticalScrollIndicator={false} style={{marginVertical:5, marginLeft:9,padding:5, borderBottomWidth: 1,borderBottomColor: '#ddd',}}>
    <Text style={{color:'skyblue', fontWeight:'bold', textAlign:'justify'}}>Pattern: {pattern ? pattern : 'coming soon'}</Text>
    <Text style={{color:'blue',fontWeight:'400',textAlign:'justify', marginVertical:5}}>Intro: {intro? intro : 'coming soon'}</Text>
  
  
    <View style={{marginBottom:12}}>
    <TouchableOpacity 
    onPress={handlePress}
     style={styles.optionBtn}>
      <Text style={{color:'gray', fontSize:16, marginHorizontal:12, fontWeight:'bold'}}>{showOptions?'Hide  Tips':'Show Tips'}</Text>
      <Animated.View style={spinStyle}>
      <ChevronDown size={20} color='white'/>
      </Animated.View>
    </TouchableOpacity>
    { showOptions && (
    <View style={{backgroundColor:'cyan', marginTop:5,marginBottom:150 , borderRadius:5}}>
    <View style={{margin:5,padding:5}}>
      { note?.map( (item, index) => (
        <Text key={index} style={{color:'green',fontWeight:'bold', fontStyle:'italic',textAlign:'justify',marginVertical:5 }}>({index + 1}) {item}</Text>
      ))}
    </View>
    <View style={{borderWidth:0.5, borderColor:'red',marginTop:12, marginHorizontal:12}}></View>
    {youtube.map((youtubeLink,index)=>(
      <TouchableOpacity key={index} style={{alignSelf:'center',marginVertical:9,padding:5, borderWidth:1, borderRadius:5,backgroundColor:'blue',elevation:3}} onPress={()=>openYouTubeLink(youtubeLink)}>
        <Text style={{color:'white',fontWeight:'bold',  }}>Tutorial Video ({index + 1})</Text>
    </TouchableOpacity>
    ))}
    
    </View>
     )}
    </View>

  </ScrollView>
      <FlatList
      data={lyrics}
      renderItem={renderListItem}
      contentContainerStyle={{paddingBottom:300}}
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
    color:'blue',
  fontStyle:'italic',
  textAlign:'justify',
  fontWeight:'600'
  },
  optionBtn : {
    backgroundColor:'white' ,
    padding:5, 
    marginBottom:11,
    borderRadius: 5 , 
    alignSelf:'flex-start', 
    flexDirection:'row',
    elevation:3
  },

});
