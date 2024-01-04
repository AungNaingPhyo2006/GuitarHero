import { StyleSheet, Text, View ,TextInput, Button} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_EMBED = 'https://www.youtube.com/embed';
const YOUTUBE_WATCH = 'https://www.youtube.com/watch?v';
const YOUTUBE_SEARCH = 'https://www.youtube.com/results?search_query';
const API_KEY = 'AIzaSyCpjIdSNvjvsfW8kferxS2-ov93DtpD3PU';

const SearchSong = ({ disabled, Save, setSongUrl }:any) => {
    // console.warn('url', setSongUrl)
    const songInputRef = useRef(null);
    const [songName, setSongName] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [videoList, setVideoList] = useState([]);

    // useEffect(() => {
    //     songInputRef?.current.focus();
    //   }, []);
    
    const createAPIUrl= () =>{
        const searchTerm = encodeURIComponent(songName.includes('karaoke') ? songName : `${songName} karaoke`);
        return `${YOUTUBE_API_URL}/search?key=${API_KEY}&part=snippet&limit=10&q=${searchTerm}`;
      }
    
    const startLoading=() => {
        setLoading(true);
        setMessage(null);
        setVideoList([]);
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
        if(!songName) {
            return
        }else{
        startLoading();
        fetch(createAPIUrl())
          .then((res) => res.json())
          .then(({ items }) => createVideoList(items))
          .catch(() => setMessage('Oopssomething went wrong! Try again!'))
          .finally(() => setLoading(false));
        }
      }


  const handleChange=({ target } : any) => {

    const { value } = target;
    console.warn('value', value)

    setSongName(value);
    if (value) {
      if (value.startsWith('http')) {
        setSongUrl(value);
      } else {
        setSongUrl(`${YOUTUBE_SEARCH}=${encodeURIComponent(`${value} karaoke`)}`);
      }
    } else {
      setSongUrl(null);
    }
  }

  return (
    <View style={{backgroundColor:'pink'}}>
      <TextInput
          placeholder="Song name"
          ref={songInputRef}
          value={songName}
          onChangeText={text => handleChange(text)}
         // disabled={loading || disabled}
         style={styles.input}
        />

        <Button
        title='Search'
         // icon={loading ? 'loader' : 'search'}
         // iconSpin={loading}
          onPress={()=>loadVideos}
         disabled={!songName || loading || disabled}
        />

        {message ? (
        <Text>{message}</Text>
      ) : (
        videoList.map((video) => (
          <View key={video.id}>
            <Text>{video.title}</Text>

            <Button title="USE THIS SONG" disabled={disabled} onPress={() => Save(video.url)} />
          </View>
        ))
      )}

    </View>
  )
}

export default SearchSong

const styles = StyleSheet.create({
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})