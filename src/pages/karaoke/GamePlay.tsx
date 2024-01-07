import { StyleSheet, Text, TouchableOpacity, View , FlatList ,Button , Linking} from 'react-native'
import React, { useState ,useEffect} from 'react'
import { useAuth } from '../../constants/MyContext';

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
      }, 5000);
    }
  };

  // const shufflePlayers1 = () => {
  //   if (playerList.length > 0) {
  //     // Copy the current playerList to avoid modifying the state directly
  //     const shuffledList = [...playerList];

  //     // Fisher-Yates (Knuth) Shuffle algorithm
  //     for (let i = shuffledList.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
  //     }

  //     setPlayerList(shuffledList);

  //     setTimeout(() => {
  //       setCurrentPlayer(shuffledList[0]);
  //     }, 1000); 

  //   }
  // };

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

  // console.warn('currentPlayer', currentPlayer)
  return (
    <View>
      <FlatList
        data={playerList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'pink', margin: 5, padding: 10, borderRadius: 5 }}>
            <TouchableOpacity onPress={()=>openLink(item.song)} style={{marginHorizontal:12,padding:9,width:'70%'}}>
            <Text style={{color:'red', fontSize:18,fontWeight:'800'}}> ({index + 1})  {item.playerName}</Text>
            </TouchableOpacity>
            <Button title="Sing" onPress={() => {openLink(item.song) ; deletePlayer(item.id)}}  />
          </View>
        )}
      />
    
      <TouchableOpacity style={styles.button} onPress={shufflePlayers}>
      <Text style={{ ...styles.titleTxt, alignSelf: 'center' }}>Start</Text>
     </TouchableOpacity>
    
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