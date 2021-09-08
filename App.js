import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';
import * as Speech from "expo-speech"

export default class App extends React.Component {

  state = {
    inputWords: ""
  }

  speak() {
    //const words = "Hello everyone"
    //Speech.speak(words)
    const words = this.state.inputWords
    Speech.speak(words)
  }

  render() {
    return (
      < View style={styles.container} >
        <ImageBackground source={require('./assets/fondo01.png')} style={styles.backgroungImage}>
          <TextInput
            placeholder="Write some words"
            onChangeText={text => this.setState({ inputWords: text })}
          />

          <Button color="#841584"
            title="Say Something"
            onPress={() => { this.speak() }}
          />
        </ImageBackground>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroungImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6
  },
});
