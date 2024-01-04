import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Alert
} from 'react-native';
import ChordDiagram from '../components/ChordDiagram';


const SettingsScreen = ({ route, navigation }: any) => {
  // React.useEffect (()=> {
  
  //     Alert.alert(
  //       '',
  //       'Under Progress!',
  //       [
  //         {
  //           text: 'OK',
  //           onPress: () => {
  //            // navigation.goBack();
  //           },
  //         },
  //       ],
  //       { cancelable: false }
  //     );
    

   
  //  },[navigation])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ 
        flex: 1, 
        // padding: 16 
        }}>
        <View
          style={{
            // flex: 1,
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
        
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('KaraokeGame')
            }>
            <Text style={styles.titleTxt}>Go to Karaoke Game</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Profile')
            }>
            <Text style={styles.titleTxt}>Open Profile Screen</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </SafeAreaView>
  );
}
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
export default SettingsScreen;