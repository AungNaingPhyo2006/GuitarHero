import { StyleSheet, Text, TouchableOpacity, View ,FlatList, Button, Linking} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../constants/MyContext'
import {  PlusCircle,  Trash2 } from 'lucide-react-native';
import useIsOnline from '../../constants/useIsOnline';

const KaraokeGame = ({navigation}: any) => {
    const {playerList,setPlayerList} = useAuth();
    const isOnline = useIsOnline();
    const deletePlayer = (id: number) => {
        setPlayerList((prevList) => prevList.filter((player) => player.id !== id));
      };

      const openLink = (url : string) => {
        if (url) {
          Linking.openURL(url)
            .then(() => console.log('Opened successfully'))
            .catch((err) => console.error('Error opening link:', err));
        }
      };

      

    console.log('playerList',playerList)
    // <========TEST END=======>
  return (
    <View>
    <View style={styles.button}>
      <Text style={styles.titleTxt}>Karaoke time, let's have fun 🥳</Text>
    </View>
  
    <TouchableOpacity style={{...styles.button,flexDirection:'row', justifyContent:'space-evenly'}} onPress={()=>{ navigation.navigate('AddPlayer') }}>
        <Text style={{...styles.titleTxt, alignSelf:'center'}}>Please Add Players</Text>
        <PlusCircle size={24} color='blue'/>
    </TouchableOpacity>
     {playerList.length == 0 ? (
        <Text style={{...styles.titleTxt,color:'blue', alignSelf:'center', marginVertical:100}}>No player Yet! </Text>
    ) : (<></>)}

    <View style={{margin:20}}>
    <FlatList
        data={playerList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',marginTop:9, backgroundColor: 'pink',  padding: 10, borderRadius: 5 }}>
            <TouchableOpacity onPress={()=>openLink(item.song)} style={{padding:9,width:'70%'}}>
            <Text style={{color:'red', fontSize:18,fontWeight:'800'}}>{item.playerName}</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => deletePlayer(item.id)}>
            <Trash2 size={24} color='red'/>
            </TouchableOpacity>
          </View>
        )}
      />
   </View>

    {playerList.length > 1  && isOnline ?
     (  
      <View style={{marginHorizontal:15, padding:5}}> 
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('GamePlay')}>
           <Text style={{color:'red', fontSize:18,fontWeight:'600'}}>Play</Text>
      </TouchableOpacity>
      </View>) 
     : (<></>)}

    </View>
  )
}

export default KaraokeGame

const styles = StyleSheet.create({
    titleTxt : {
    fontSize: 18,
    fontWeight:'800',
    color:'green'
    },
    button: {
      width:'90%',
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