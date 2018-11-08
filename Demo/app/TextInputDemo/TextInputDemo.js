import React, { Component } from 'react';
import {  
    View, 
    Text, 
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class TextInputDemo extends Component {
  render() {
    return (
      <View style={{ padding: 15, backgroundColor:'white', height: 80}}>
            <TextInput style={{flex: 1, backgroundColor: "gray"}} 
                        placeholder="输入想要输入的"
            />
    //   </View>

    );
  }
}
