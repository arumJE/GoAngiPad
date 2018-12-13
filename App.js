/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { DatePickerIOS, Picker, TextInput, Image, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      phone: '',
      email: '',
      zip: '',
      dob: '',
      text: '',
      activeBgColor: 'steelblue',
      inactiveBgColor: 'white',
      status: 'Please select one',
      chosenDate: new Date(),
      checked: false
    };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('./white-ang-logo.png')} />
        </View>
        <Text style={styles.subHeader}>LET'S TAKE THE FIRST STEPS!</Text>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.formItemD}>
              <Text>FIRST NAME*</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(fname) => this.setState({fname})}
                value={this.state.fname}
              />
            </View>
            <View style={styles.formItemD}>
              <Text>LAST NAME*</Text>
              <TextInput
                style={styles.inputText}
                selectedValue={this.state.status}
                onChangeText={(lname) => this.setState({lname})}
                value={this.state.lname}
              />
            </View>
            <View style={styles.formItemD}>
              <Text>PHONE NUMBER*</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(phone) => this.setState({phone})}
                value={this.state.phone}
              />
            </View>
            <View style={styles.formItemD}>
              <Text>EMAIL*</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
            </View>
            <View style={styles.formItemS}>
              <Text>ZIP CODE*</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(zip) => this.setState({zip})}
                value={this.state.zip}
              />
            </View>
            <View style={styles.formItemS}>
              <Text>DATE OF BIRTH*</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(dob) => this.setState({dob})}
                value={this.state.dob}
              />
            </View>
            <View style={styles.formItemS}>
              <Text>ARE YOU CURRENTLY OR HAVE YOU EVER BEEN IN THE MILITARY?</Text>
              <View style={styles.formItemC}>
                <CheckBox
                  center
                  style={{backgroundColor: '#eaeaea'}}
                  checked={this.state.checked}
                  onPress={() => this.setState({
                    checked: !this.state.checked
                    })
                  }
                />
              </View>
            </View>
            <View style={styles.formItemS}>
              <View>
                <Text>WHAT IS YOUR CITIZENSHIP STATUS?</Text>
                <Picker
                  style={styles.pickerStyle}
                  selectedValue={this.state.status}
                  style={{ height: 50, width: 100 }}
                  onValueChange={(itemValue, itemIndex) => this.setState({status: itemValue})}>
                  <Picker.Item label="Birthright Citizen" value="birth" />
                  <Picker.Item label="Naturalized Citizen" value="naturalized" />
                  <Picker.Item label="Dual Citizen" value="dual" />
                  <Picker.Item label="Non-Citizen" value="non" />
                </Picker>
              </View>
            </View>
            <View style={styles.formItemS}>
              <Text>HOW WOULD YOU LIKE TO BE CONTACTED?</Text>
            </View>
          </View>
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
    backgroundColor: '#F5FCFF',
    margin: 10
  },
  formContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  formItemD: {
    width: '50%',
    padding: 10
  },
  formItemS: {
    width: '100%',
    padding: 10
  },
  formItemC: {
    width: 100,
  },
  inputText: {
    borderColor: 'steelblue',
    borderWidth: 1,
    height: 50
  },
  checkbox: {
    width: 20
  },
  datePick: {

  },
  pickerStyle: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'steelblue'
  },
  buttonRow: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: 50,
    borderColor: 'steelblue'
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
