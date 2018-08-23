/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
      super(props);
      this.state = {
          pic:{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          },
          text:''
      }
  }
  _onPressButton(){
      Alert.alert("TouchableHighlight");
  }
  render() {
    return (
        <ScrollView>
            <View>
                <Image source={this.state.pic} style={{'height':100, width:'100%'}}></Image>
                <Image source={this.state.pic} style={{'height':100, width:'100%'}}></Image>
                <Image source={this.state.pic} style={{'height':100, width:'100%'}}></Image>
                <Image source={this.state.pic} style={{'height':100, width:'100%'}}></Image>
                <View style={{height: 50,'flexDirection':'row','justifyContent':'space-between',"alignItems":'center'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>
                <View style={{padding:10, fontSize: 42}}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <Text style={{padding: 10, fontSize: 42}}>
                        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                    </Text>
                    <Button
                        onPress={() => {
                            Alert.alert("你点击了按钮！");
                        }}
                        title="点我！"
                    />
                </View>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    height:200,
    backgroundColor:"#f00"
  },
  instructions: {
    textAlign: 'center',
    color: '#f00',
    marginBottom: 5,
  },
  button:{
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
  },
  buttonText:{
      padding: 20,
      color: 'white'
  }
});
