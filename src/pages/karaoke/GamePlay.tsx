import { StyleSheet, Text, TouchableOpacity, View , FlatList ,Easing, Linking, Animated} from 'react-native'
import React, { useState ,useEffect, useRef} from 'react'
import { useAuth } from '../../constants/MyContext';
import { Mic, MicOff, Music } from 'lucide-react-native';
import AnpTextAnimation from '../../components/AnpTextAnimation';

const GamePlay = ({navigation}: any) => {
  const {playerList,setPlayerList} = useAuth();
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [shuffling, setShuffling] = useState(false);


  const shufflePlayers = () => {
    if (playerList.length > 0 && !shuffling) {
      setShuffling(true);
      const intervalId = setInterval(() => {
        // Copy the current playerList to avoid modifying the state directly
        const shuffledList = [...playerList];

        // Fisher-Yates (Knuth) Shuffle algorithm
        for (let i = shuffledList.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
        }

        setPlayerList(shuffledList);
        setCurrentPlayer(shuffledList[0]);
      }, 100);

      // Stop shuffling after 5 seconds
      setTimeout(() => {
        setShuffling(false);
        clearInterval(intervalId);
      }, 3000);
    }
  };

  

  useEffect(() => {
    if (currentPlayer && playerList.length > 1) {
      const remainingPlayers = playerList.slice(1);
      setPlayerList(remainingPlayers);
      setCurrentPlayer(null);
    }
  }, []);

  const openLink = (url : string) => {
    if (url) {
      Linking.openURL(url)
        .then(() => console.log('Opened successfully'))
        .catch((err) => console.error('Error opening link:', err));
    }
  };

  const deletePlayer = (id: number) => {
    setPlayerList((prevList) => prevList.filter((player) => player.id !== id));
  };
 //<=======Animation start====>
 const spinValue = new Animated.Value(0);

 useEffect(() => {
   spin();
 }, []);

 const spin = () => {
   spinValue.setValue(0);
   Animated.timing(
     spinValue,
     {
       toValue: 1,
       duration: 3000,
       easing: Easing.linear,
       useNativeDriver: true,
     }
   ).start(() => spin());
 };

 const spinAnimation = spinValue.interpolate({
   inputRange: [0, 1],
   outputRange: ['0deg', '360deg'],
 });

 //<=====Animation end===>

  // console.warn('currentPlayer', currentPlayer)
  // console.warn('player', playerList)
  return (
    <View style={{marginTop:20,marginBottom:200}}>
      {currentPlayer == null  || playerList.length == 0 ? (
         <View style={{alignSelf:'center'}}>
         <Text style={{color:'red', fontSize:18, fontWeight:'600'}}>Whose turn to sing now?</Text>
      </View>
      ) : (
       <View style={{alignSelf:'center'}}>
          <Text style={{color:'red', fontSize:18, fontWeight:'600'}}>It's 
          <Text style={{color:'blue', fontSize:18, fontWeight:'400'}}> 
          { playerList?.length == 1 ? ' G.O.A.T' : currentPlayer?.playerName  } 's  </Text>
          turn to sing.</Text>
        </View>
      )}
     
      <FlatList
      showsVerticalScrollIndicator={false}
        data={playerList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'pink', margin: 11, padding: 10, borderRadius: 5 }}>
            <TouchableOpacity style={{ flexDirection:'row',marginHorizontal:12,padding:9,width:'70%'}}>
            <View style={{width:25,height:25,
              backgroundColor:currentPlayer?.id === item.id || playerList.length == 1 ? 'blue':'white',
              alignItems:'center',justifyContent:'center',borderRadius:50}}>
            <Text style={{color: currentPlayer?.id === item.id || playerList.length == 1 ?'white' :'blue',
             fontSize:18,fontWeight:'600'}}>{index + 1}</Text>
            </View>
            <Text style={{color: currentPlayer?.id === item.id || playerList.length == 1 ? 'blue' :'red', 
            fontSize:18,fontWeight:'800'}}> {item.playerName}</Text>
            </TouchableOpacity>
            
               <TouchableOpacity
               disabled={currentPlayer?.id === item.id || playerList.length == 1 ? false : true}  
                style={{ width:30,height:30,
                  backgroundColor:'white',
                  padding:5 ,alignItems:'center',justifyContent:'center',borderRadius:50,borderWidth:0.5}} 
               onPress={() => {openLink(item.song)  ;deletePlayer(item.id) }}>
                {currentPlayer?.id === item.id || playerList.length == 1? (
                <Mic size={24} color='green'/>
                ):(
                <MicOff size={24} color='green'/>
                )}
              </TouchableOpacity>
           
          </View>
        )}
      />
    
   
{playerList.length > 0 ? (
      <TouchableOpacity style={{...styles.button,width:'30%', alignSelf:'center',backgroundColor:'blue'}} onPress={shufflePlayers}>
       <View style={{flexDirection:'row', justifyContent:'space-between' ,}}>
       <Animated.View style={{transform: [{ rotate: spinAnimation }],marginHorizontal:6}}>
          <Music size={24} color='white'/>
        </Animated.View>
      <Text style={{ ...styles.titleTxt,color:'white' }}>Start</Text>
      </View>

     </TouchableOpacity>
) : (
  <TouchableOpacity style={{...styles.button, alignSelf:'center'}} onPress={()=> navigation.navigate('KaraokeGame')}>
  <AnpTextAnimation characters='Karaoke Party is End.'/>
  <Text style={{ ...styles.titleTxt, alignSelf: 'center',marginTop:6 }}>Restart the Party!</Text>
 </TouchableOpacity>
)}
     

    
    </View>
  )
}

export default GamePlay

const styles = StyleSheet.create({
    titleTxt : {
        fontSize: 18,
        fontWeight:'800',
        color:'green',
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
})