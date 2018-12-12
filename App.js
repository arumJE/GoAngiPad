/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, Image, Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      fname: ''
    };
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('./white-ang-logo.png')} />
        </View>
        <Text style={styles.subHeader}>LET'S TAKE THE FIRST STEPS!</Text>
        <View style={styles.container}>
          <View >
            <Text>FIRST NAME*</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(fname) => this.setState({text})}
              value={this.state.text}
            />
          </View>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: 'steelblue'
  },
  subHeader: {
    color: 'steelblue',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  image: {
    width: 250,
    height: 75,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  inputText: {
    borderColor: 'steelblue',
    borderWidth: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
