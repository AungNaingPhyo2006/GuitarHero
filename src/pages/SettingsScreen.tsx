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
        
         <View style={{ justifyContent:'center',padding:15,alignItems:'center', marginTop : 20,borderRadius:12,width:300, backgroundColor:'pink', elevation:5}}>
              <View style={{marginVertical:12}}>
                <Text style={{color:'red', textAlign:'justify', fontSize:18 , fontWeight:600}}>လောကမှာ ကျင်လည်ရတဲ့ အခါ တခါတလေ ပင်ပန်းမှာပေါ့။ ဝန်ထုပ်ဝန်ပိုးတွေ ခဏလောက် ဖြစ်ဖြစ် ပစ်ချခဲ့ပြီး သူငယ်ချင်းတွေနဲ့ ဖြစ်ဖြစ် တစ်ကိုယ်တည်း ဖြစ်ဖြစ် တေးသီချင်းများနဲ့ သီဆိုပျော်ပါးလိုက်ပါ။</Text>
              </View>
              <TouchableOpacity
                  // style={styles.button}
                  onPress={
                    () => navigation.navigate('KaraokeGame')
                  }>
                  <Text style={{...styles.titleTxt , color: 'blue' , textDecorationLine:'underline'}}>Go to Karaoke Game</Text>
                </TouchableOpacity>

         </View>
         
          
          {/* <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Profile')
            }>
            <Text style={styles.titleTxt}>Open Profile Screen</Text>
          </TouchableOpacity> */}
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