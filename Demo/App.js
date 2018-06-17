/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import { RootStackView } from "./app/CustomRouter";

import CustomRouter from "./app/CustomRouter";

export default class App extends Component {
  render() {
    // return <RootStack/>;
    // return <View style={{backgroundColor:'white'}}/>
    return <CustomRouter/>;
  }
}
