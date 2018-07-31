/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import SignatureCapture from 'react-native-signature-capture';



export default class ColetorAssinatura extends Component {
  render() {
      return (
          <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{alignItems:"center",justifyContent:"center"}}>Assine no espaço em branco </Text>
              <SignatureCapture
                  style={[{flex:1},styles.signature]}
                  ref="sign"
                  onSaveEvent={this._onSaveEvent}
                  onDragEvent={this._onDragEvent}
                  saveImageFileInExtStorage={true}
                  showNativeButtons={false}
                  viewMode={"portrait"}/>

              <View style={{ flex: 1, flexDirection: "row" }}>
                  <TouchableHighlight style={styles.buttonStyle}
                      onPress={() => { this.saveSign() } } >
                      <Text>Salvar</Text>
                  </TouchableHighlight>

                  <TouchableHighlight style={styles.buttonStyle}
                      onPress={() => { this.resetSign() } } >
                      <Text>Limpar</Text>
                  </TouchableHighlight>

              </View>

          </View>



      );
  }

  saveSign() {
      this.refs["sign"].saveImage();
  }

  resetSign() {
      this.refs["sign"].resetImage();
  }

  _onSaveEvent(result) {
      //result.encoded - for the base64 encoded png 
      //result.pathName - for the file path name 
      console.log(result);
  }
  _onDragEvent() {
       // This callback will be called when the user enters signature
      console.log("dragged");
  }
}



const styles = StyleSheet.create({

  signature: {
      flex: 1,
      borderColor: '#000033',
      borderWidth: 1,
  },
  buttonStyle: {
      flex: 1, justifyContent: "center", alignItems: "center", height: 50,
      backgroundColor: "#eeeeee",
      margin: 10
      
  }
});