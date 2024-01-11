import { Button, StyleSheet, Text, TextInput, View ,FlatList, TouchableOpacity, Alert, ScrollView} from 'react-native'
import React, { useEffect, useRef, useState , } from 'react'
import { useAuth } from '../../constants/MyContext';
import SearchSong from './SearchSong';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Import, Search } from 'lucide-react-native';
import useIsOnline from '../../constants/useIsOnline';


const AddPlayer = ({navigation}:any) => {
    const nameInputRef = useRef(null);
    const {playerList,setPlayerList} = useAuth();
    const [songUrl, setSongUrl] = useState(null);
    const [playerName, setPlayerName] = useState('');
    const isOnline = useIsOnline();
    // console.warn('isOnline',isOnline)
    // <======Search start=====>
    const songInputRef = useRef(null);
    const [songName, setSongName] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [videoList, setVideoList] = useState([]);
    const [isSearch, setIsSearch] = useState(false);


    const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';
    const YOUTUBE_EMBED = 'https://www.youtube.com/embed';
    const YOUTUBE_WATCH = 'https://www.youtube.com/watch?v';
    const YOUTUBE_SEARCH = 'https://www.youtube.com/results?search_query';
    const API_KEY = 'AIzaSyCpjIdSNvjvsfW8kferxS2-ov93DtpD3PU';

    const createAPIUrl= () =>{
        const searchTerm = encodeURIComponent(songName.includes('karaoke') ? songName : `${songName} karaoke`);
        return `${YOUTUBE_API_URL}/search?key=${API_KEY}&part=snippet&limit=10&q=${searchTerm}`;
      }
    
      const createVideoList=(items : any) => {
        const videos = items.reduce((acc, item ) => {
          if (item.id.kind === 'youtube#video' && item.id.videoId) {
            acc.push({
              id: item.id.videoId,
              url: `${YOUTUBE_WATCH}=${item.id.videoId}`,
              embedUrl: `${YOUTUBE_EMBED}/${item.id.videoId}`,
              title: item?.snippet?.title ? item.snippet.title : 'Karaoke Song',
            });
          }
          return acc;
        }, []);
        if (!videos.length) {
          setMessage('No songs found, try other song name');
        }
        setVideoList(videos);
      }

      const loadVideos = () =>{
        setIsSearch(true)
        if(!isOnline){
          Alert.alert(
            '',
            'Your Internet Connection is very poor!',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => navigation.navigate('KaraokeGame') },
            ],
            { cancelable: false }
          );
          return
        }else{
          if(!songName) {
            return
        }else{
        // startLoading();
        fetch(createAPIUrl())
          .then((res) => res.json())
        //   .then(({items}) => console.log('videolist',items))
          .then(({ items }) => createVideoList(items))
          .catch(() => setMessage('Oopssomething went wrong! Try again!'))
        //   .finally(() => setLoading(false));
        }

        }
       
      }

      const handleChange=(value:string)=> {
        setSongName(value);
        if (value) {
            setSongUrl(`${YOUTUBE_SEARCH}=${encodeURIComponent(`${value} karaoke`)}`);
        } else {
          setSongUrl(null);
        setIsSearch(false)
        }
      }
    // console.warn('songName',songName)
    //   console.log('videoList',videoList)
    // console.log('songUrl',songUrl)
   //<======Search End=====>
    const Save = (url : string) => {
      if(!isOnline){
        Alert.alert(
          '',
          'Your Internet Connection is very poor!',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => navigation.navigate('KaraokeGame') },
          ],
          { cancelable: false }
        );
        return
      }else{
        if (playerName ) {
            const trimmedPlayerName = playerName.trim();

          // Check if playerName already exists in the playerList
          const isPlayerNameExists = playerList.some((player) => player.playerName === trimmedPlayerName);
      
          if (isPlayerNameExists) {
            // Handle the case where the playerName already exists (show error message, etc.)
            Alert.alert('','Player name already exists. Please choose a different name.');
          } else {
            // Update the state with the new player if the name doesn't exist
            setPlayerList((prevList) => [
              ...prevList,
              { id: Date.now(), playerName: trimmedPlayerName , song: url ? url :  songUrl},
            ]);
      
            // Clear the input field
            setPlayerName('');
            navigation.navigate('KaraokeGame');
          }
        }
      }
      };
      
    //   const Save = () => {
    //     if (playerName) {
    //       // Update the state with the new player
    //       setPlayerList((prevList ) => [
    //         ...prevList,
    //         { id: Date.now(), playerName: playerName },
    //       ]);
    
    //       // Clear the input field
    //       setPlayerName('');
    //       navigation.navigate('KaraokeGame')
    //     }
    //   };

   
  return (
    <View style={{backgroundColor:'skyblue'}}>
      <Text style={{...styles.titleTxt, marginHorizontal:12,marginTop:24}}>Add Player Name</Text>
        <TextInput
        maxLength={40}
        placeholder="Player name"
        placeholderTextColor={'red'}
        value={playerName}
        onChangeText={ text => setPlayerName(text)}
        ref={nameInputRef}
        style={styles.input}
      />

     <View style={{marginHorizontal:12,flexDirection:'row', borderWidth: 1,justifyContent:'space-between',borderRadius:5}}>
      <TextInput
          placeholder="Song name or artist name"
        placeholderTextColor={'red'}
          ref={songInputRef}
          value={songName}
          onChangeText={text => handleChange(text)}
         // disabled={loading || disabled}
         style={{ 
         width:'80%', 
         height: 40,
         marginVertical:12,
         padding: 10,
         color:'green',
         fontSize:16,
         fontWeight:'300'
        }}
        />

        
      <TouchableOpacity 
        onPress={()=> {isSearch ?  Save(songUrl): loadVideos()} } 
        style={{marginHorizontal:9,justifyContent:'center',marginVertical:12,padding:5,borderRadius:5}}>
           {isSearch ? (<Import size={28} color='red' /> ) 
           : (<Search size={28} color='red' />)} 
        </TouchableOpacity>
    </View>

   {/*   <View style={{ marginHorizontal:12,flexDirection:'row', justifyContent:'space-around',}}>
      <TouchableOpacity
      onPress={() => navigation.navigate('KaraokeGame')}
      style={styles.button}>
        <Text style={{color:'white'}}>Cancel</Text>
       </TouchableOpacity>
       <TouchableOpacity
       disabled={!playerName || !songName || !isSearch || !isOnline}
        onPress={()=>Save(songUrl)}
      style={{...styles.button,backgroundColor:!playerName || !songName || !isSearch || !isOnline ? '#DDDDDD' : 'red'}}>
        <Text style={{color:'white'}}>Save</Text>
       </TouchableOpacity>
      </View>
    */} 
      {videoList.length > 0 ? (
       <View style={{borderWidth:1,marginVertical:9, marginHorizontal:15}}></View>
      ) :(<></>)}
     
      <ScrollView style={{marginHorizontal:12,height:'70%',}}>
        {videoList?.map((video)=> (
            <View style={{marginBottom:30}}>
              <Text style={{color:'red',fontWeight:'700',marginBottom:3}}>{video.title}</Text> 
            <Button title="USE THIS SONG" onPress={()=> Save(video.url)}/>
             <YoutubePlayer
             height={250}
             play={false}
             videoId={video?.id}
            />
            </View>
        ))}
      </ScrollView>

    </View>
  )
}

export default AddPlayer

const styles = StyleSheet.create({
    titleTxt : {
        fontSize: 18,
        fontWeight:'800',
        color:'green'
        },
    input: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:5,
        color:'green',
        fontSize:16,
        fontWeight:'300'
      },
      button: {
        marginHorizontal:12,
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 15,
        marginTop: 16,
        marginBottom:5,
        borderRadius:5,
        elevation:5
      },
})

// const videoList =[
//     {"embedUrl": "https://www.youtube.com/embed/0g-g8KCsQCs",
//      "id": "0g-g8KCsQCs", "title": "စိုင်းထီးဆိုင် - နေရာတိုင်းမှာ karaoke lyrics /  ေနရာတိုင္းမွာ / စိုင္းထီးဆိုင္ / Sai Htee Sai", 
//      "url": "https://www.youtube.com/watch?v=0g-g8KCsQCs"}, 
//     {"embedUrl": "https://www.youtube.com/embed/kXXteNhbqrc", 
//     "id": "kXXteNhbqrc", 
//     "title": "အရင်လိုဘဝမျိုး ရောက်ချင်တယ်   (စိုင်းထီးဆိုင်) | Karaoke with Lyrics", 
//     "url": "https://www.youtube.com/watch?v=kXXteNhbqrc"}, 
//     {"embedUrl": "https://www.youtube.com/embed/thA_QV6oHmA", 
//     "id": "thA_QV6oHmA", "title": "စိုင်းထီးဆိုင် - အချစ်ဆိုတာလျို့ဝှက်ချက်တစ်ခုပါ | instrumental karaoke", 
//     "url": "https://www.youtube.com/watch?v=thA_QV6oHmA"}, 
//     {"embedUrl": "https://www.youtube.com/embed/-pjLlHJelO8", 
//     "id": "-pjLlHJelO8", "title": "စိုင်းထီးဆိုင်  - ဒီထက်ပိုပြီးမတတ်နိုင်ဘူး Karaoke lyrics / ဒီထက္ပိုၿပီးမတတ္ႏိုင္ဘူး/စိုင္းထီးဆိုင္", 
//     "url": "https://www.youtube.com/watch?v=-pjLlHJelO8"}, 
//     {"embedUrl": "https://www.youtube.com/embed/MQUqHWF9Jeo", 
//     "id": "MQUqHWF9Jeo", "title": "အဆုံးအဖြတ် - စိုင်းထီးဆိုင် (Karaoke) Ah Sone Ah Phyart - Sai Htee Saing", 
//     "url": "https://www.youtube.com/watch?v=MQUqHWF9Jeo"}]