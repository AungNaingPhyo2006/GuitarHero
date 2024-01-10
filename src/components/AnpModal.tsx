import React, {useState} from 'react';
import {Alert, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {  myText1 , myText2} from '../constants/controllers';

const AnpModal = ({modalVisible, setModalVisible}: {modalVisible:boolean, setModalVisible: ()=> void}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>X</Text>
            </TouchableOpacity>
            <ScrollView style={{}}>
            <Text style={{...styles.modalText,textAlign:'justify',}}>{myText1}</Text>
            <Text style={{...styles.modalText,textAlign:'justify',}}>{myText2}</Text>
            </ScrollView>
           
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 50,
    justifyContent:'center',
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    width:30,
    height:30,
    position:'absolute',
    marginTop:-15,
    alignSelf:'flex-end',
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color:'blue',
    fontSize:18,
  },
});

export default AnpModal;