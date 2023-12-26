import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  PermissionsAndroid,
  TouchableHighlight,
} from 'react-native';
import CallDetectorManager from 'react-native-call-detection';

const SettingsScreen = ({ route, navigation }: any) => {
  const [featureOn, setFeatureOn] = useState<boolean>(false);
  const [incoming, setIncoming] = useState<boolean>(false);
  const [number, setNumber] = useState<string | null>(null);

  useEffect(() => {
    const requestPhonePermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
            PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
          ]);

          if (
            granted['android.permission.READ_CALL_LOG'] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            granted['android.permission.READ_PHONE_STATE'] ===
              PermissionsAndroid.RESULTS.GRANTED
          ) {
            startListenerTapped();
          } else {
            console.warn('Phone state permission denied');
          }
        } catch (error) {
          console.error('Error requesting phone permission:', error);
        }
      } else {
        startListenerTapped();
      }
    };
  requestPhonePermission();
  // stopListenerTapped()
  }, []);

  let callDetector: CallDetectorManager | null = null;

  const startListenerTapped = () => {
    setFeatureOn(true);
    callDetector = new CallDetectorManager(
      (event: string, phoneNumber: any) => {
        console.log('phone=>', phoneNumber);
        if (event === 'Disconnected') {
          setIncoming(false);
          setNumber(null);
        } else if (event === 'Incoming' || event === 'Offhook') {
          setIncoming(true);
          setNumber(phoneNumber);
        } else if (event === 'Missed') {
          setIncoming(false);
          setNumber(null);
        }
      },
      true,
      () => {},
      {
        title: 'Phone State Permission',
        message:
          'This app needs access to your phone state in order to react and/or to adapt to incoming calls.',
      }
    );
  };

  const stopListenerTapped = () => {
    setFeatureOn(false);
    callDetector && callDetector.dispose();
  };


 

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Should the detection be on?</Text>
      <TouchableHighlight
        onPress={featureOn ? stopListenerTapped : startListenerTapped}
      >
        <View
          style={{
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: featureOn ? 'greenyellow' : 'red',
          }}
        >
          <Text style={styles.text}>{featureOn ? 'ON' : 'OFF'}</Text>
        </View>
      </TouchableHighlight>
      {incoming && (
        <Text style={{ fontSize: 50 }}>{number?.toString()} Incoming</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'honeydew',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    padding: 20,
    fontSize: 20,
  },
});

export default SettingsScreen;
