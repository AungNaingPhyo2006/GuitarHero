import { StyleSheet, Text, Alert,TouchableOpacity, View ,FlatList, Button, Linking, Animated , PanResponder} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../constants/MyContext'
import {  Disc2, Goal, PlusCircle,  Trash2 } from 'lucide-react-native';
import useIsOnline from '../../constants/useIsOnline';
import AnpTextAnimation from '../../components/AnpTextAnimation';
import AnpModal from '../../components/AnpModal';
import { spinAnimation } from '../../components/spinAnimation';
const KaraokeGame = ({navigation}: any) => {

    const {playerList,setPlayerList} = useAuth();
    const isOnline = useIsOnline();
  const [modalVisible, setModalVisible] = useState(false);

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

      useEffect (()=> {
        setModalVisible(!modalVisible)
        // Alert.alert(
        //   '',
        //   'Under Progress!',
        //   [
        //     {
        //       text: 'OK',
        //       onPress: () => {
        //        // navigation.goBack();
        //       },
        //     },
        //   ],
        //   { cancelable: false }
        // );
       },[])

    // console.log('playerList',playerList)
    // <========TEST END=======>
  return (
    <View style={{flex:1,backgroundColor:'skyblue'}}>
    <View style={{marginHorizontal:12,alignItems:'center',marginTop:24}}>
       <AnpTextAnimation characters="Karaoke moments, let's enjoy!"/>
    </View>
    
  
    <TouchableOpacity style={{...styles.button,flexDirection:'row', justifyContent:'space-between', marginHorizontal:18}} onPress={()=>{ navigation.navigate('AddPlayer') }}>
        <Text style={{...styles.titleTxt, alignSelf:'center',fontWeight:'300'}}>Add Players</Text>
        <PlusCircle size={24} color='green'/>
    </TouchableOpacity>
   
    {playerList.length == 1 || playerList.length == 0 ?(
      <View style={{marginHorizontal:12,alignItems:'center',marginTop:9}}>
    <Text style={{...styles.titleTxt, alignSelf:'center',fontWeight:'400',}}>
      *Add two Player at least!
      </Text>
    </View>
    ) : (
      <></>
    )}

     
    <View style={{borderWidth:1,marginTop:16, marginHorizontal:15}}></View>
     {playerList.length == 0 ? (
        <Text onPress={()=>{ navigation.navigate('AddPlayer') }} style={{...styles.titleTxt,color:'blue', alignSelf:'center', marginVertical:150, fontWeight:'300',textDecorationLine:'underline',}}>No player list here! </Text>
    ) : (<></>)}

   {playerList.length > 1  && isOnline ?
     (<View style={{marginHorizontal:15, padding:5}}> 
      <TouchableOpacity style={{...styles.button, flexDirection:'row',justifyContent:'center'}} onPress={()=> navigation.navigate('GamePlay')}>
           <Goal size={24} color='red'/>
           <Text style={{color:'blue', fontSize:18,fontWeight:'600',marginHorizontal:9}}>Start Party with</Text>
           <View style={{width:25,height:25,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:50,marginHorizontal:2,}}>
           <Text style={{color:'red', fontSize:18,fontWeight:'600'}}>{playerList.length}</Text>
         </View>
         <Text style={{color:'blue', fontSize:18,fontWeight:'600',marginHorizontal:9}}>players.</Text>
      </TouchableOpacity>
      </View>) 
     : (
     <></>
     )}

   
     {/*  {playerList.length > 0 && (
      <View style={{flexDirection:'row',marginTop:12 , alignSelf:'center',}}>
       <Text style={{...styles.titleTxt,color:'black',}}>Player List </Text>
       <View style={{width:25,height:25,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:50,marginHorizontal:2}}>
         <Text style={{color:'red', fontSize:18,fontWeight:'600'}}>{playerList.length}</Text>
       </View>
       </View>
     )}
      */} 
    <View style={{margin:20,marginBottom:300}}>
    <FlatList
        showsVerticalScrollIndicator={false}
        data={playerList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginTop:9, backgroundColor: 'white',  padding: 10, borderRadius: 5 }}>
            <TouchableOpacity onPress={()=>openLink(item.song)} style={{flexDirection: 'row',padding:9,width:'80%'}}>
              <View style={{width:25,height:25,backgroundColor:'blue',alignItems:'center',justifyContent:'center',borderRadius:50,marginHorizontal:5}}>
            <Text style={{color:'white', fontSize:18,fontWeight:'600'}}>{index + 1}</Text>
            </View>
            <Text style={{color:'red', fontSize:18,fontWeight:'600'}}>{item.playerName}</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => deletePlayer(item.id)}>
               <Trash2 size={24} color='red'/>
            </TouchableOpacity>
          </View>
        )}
      />
   </View>

    <AnpModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>

   
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