/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { TabBarIOS, DatePickerIOS, Picker, TextInput, Image, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, ButtonGroup, Icon, FormLabel, FormInput, FormValidationMessage, CheckBox } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

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
      checked: false,
      selectedIndex: 0,
      selectedIndexTwo: 0,
      isDateTimePickerVisible: false
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.updateIndexTwo = this.updateIndexTwo.bind(this);
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this.setState({chosenDate: ''});
    this.setState({dob: ''});
    console.log('A date has been picked: ', date);
    let dateString = moment(Date(date)).format('DD-MM-YYYY');
    this.setState({chosenDate: dateString});
    this.setState({dob: dateString});
    this._hideDateTimePicker();
  };

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  updateIndexTwo (selectedIndexTwo) {
    this.setState({selectedIndexTwo})
  }

  render() {
    const buttons = ['YES', 'NO'];
    const { selectedIndex } = this.state;

    const buttonsTwo = ['EMAIL', 'CALL', 'TEXT', 'OPT OUT'];
    const { selectedIndexTwo } = this.state;

    let data = [
    {
      value: 'Birth',
    },
    {
      value: 'Naturalized',
    },
    {
      value: 'Dual',
    },
    {
      value: 'Non',
    }];


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
                placeholder="(###) ###-####"
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
              <View >
                <TouchableOpacity onPress={this._showDateTimePicker}>
                  <Text>Show DatePicker</Text>
                </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this._handleDatePicked}
                  onCancel={this._hideDateTimePicker}
                />
              </View>
              <TextInput
                style={styles.inputText}
                onChangeText={(dob) => this.setState({dob})}
                placeholder={this.state.dob}
              />
            </View>
            <View style={styles.formItemS}>
              <Text>ARE YOU CURRENTLY OR HAVE YOU EVER BEEN IN THE MILITARY?</Text>
              <View style={styles.formItemC}>
                <ButtonGroup
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndex}
                  selectedIndex={selectedIndex}
                  buttons={buttons}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
            </View>
            <View style={styles.formItemS}>
              <Text>WHAT IS YOUR CITIZENSHIP STATUS?*</Text>
              <Dropdown
                data={data}
                selectedItemColor='steelblue'
                containerStyle={{borderColor: 'steelblue', borderWidth: 0, height: 50,}}
              />
            </View>
            <View style={styles.formItemS}>
              <Text>HOW WOULD YOU LIKE TO BE CONTACTED BY AN AIR NATIONAL GUARD RECRUITER?</Text>
              <View style={styles.formItemC}>
                <ButtonGroup
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexTwo}
                  selectedIndex={selectedIndexTwo}
                  buttons={buttonsTwo}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.submitContainer}>
          <Button
            title="SUBMIT"
            color="white"
            backgroundColor='steelblue'
            style={styles.submit}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>PRIVACY POLICY | TERMS OF USE</Text>
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
    backgroundColor: 'white',
    margin: 10
  },
  formContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  formItemD: {
    width: '50%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20
  },
  formItemS: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20
  },
  formItemC: {
    width: '100%',
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

  },
  buttonRow: {
    flexDirection: 'row',
  },
  buttongroup: {
    height: 50,
    borderRadius: 50
  },
  buttongroupTwo: {
    height: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: 50,
    borderColor: 'steelblue'
  },
  buttonTwo: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
    borderColor: 'steelblue'
  },
  submitContainer: {
    alignItems: 'center',
    marginBottom: 40
  },
  submit: {
    width: 175,
  },
  footerContainer: {
    alignItems: 'center',
    backgroundColor: 'steelblue'
  },
  footerText: {
    color: 'white',
    marginTop: 5,
    marginBottom: 5
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
