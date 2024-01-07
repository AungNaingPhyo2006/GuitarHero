import { StyleSheet, Text, TouchableOpacity, View ,FlatList, Button, Linking} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../constants/MyContext'
import { PlusCircle } from 'lucide-react-native';

const KaraokeGame = ({navigation}: any) => {
    const {playerList,setPlayerList} = useAuth();

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
        <Text style={{...styles.titleTxt, alignSelf:'center'}}>Add Player</Text>
        <PlusCircle size={24} color='blue'/>
    </TouchableOpacity>
     {playerList.length == 0 ? (
        <Text style={{...styles.titleTxt,color:'blue', alignSelf:'center', marginVertical:100}}>No player Yet! </Text>
    ) : (<></>)}
    <FlatList
        data={playerList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'pink', margin: 5, padding: 10, borderRadius: 5 }}>
            <TouchableOpacity onPress={()=>openLink(item.song)} style={{marginHorizontal:12,padding:9,width:'70%'}}>
            <Text style={{color:'red', fontSize:18,fontWeight:'800'}}>{item.playerName}</Text>
            </TouchableOpacity>
            <Button title="Delete" onPress={() => deletePlayer(item.id)} />
          </View>
        )}
      />
   

    {playerList.length > 1 ?
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