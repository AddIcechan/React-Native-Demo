/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import DoubanMovie from "./app/day01/DoubanMovie";

const dataList = [
  {key: 'a' ,title:"豆瓣影院热映"},
];

class HomeScreen extends Component {

  static navigationOptions = {
      title: "Home",
  }

  render(){

    const { navigation } = this.props;

    return(
      <FlatList
      // data={[{key: 'a'}, {key: 'b'}]}
  // renderItem={({item}) => <Text>{item.key}</Text>}
        data={dataList}
        renderItem={this._renderItem}
        // keyExtractor={this._keyExtractor}
        ItemSeparatorComponent={this._ItemSeparatorComponent}
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}
        />
    );
  }

  // _keyExtractor = (item, index) => item.ID

  _renderItem = ({item, index}) => {
    let rowIndex = Number(index) + 1;
    return (
      <TouchableOpacity style={styles.container} 
      onPress={() => { this._onPress(index) } }>
        <Text style={styles.rowTitle}> {rowIndex}. {item.title} </Text>
        <Image source={require('./sources/indicator_right.png')} />
      </TouchableOpacity>
    );
  };

  _ItemSeparatorComponent = () => {
      return <View style={styles.separator}/>;
  };

  _onPress = (index) => {
      switch (index) {
        case 0:
          {
              this.props.navigation.push('DoubanMovie');
          }
          break;
      
        default:
          break;
      };
  };
  

}

export default class App extends Component {
  render() {
    return <RootStack/>;
  }
}

const RootStack = StackNavigator(
  {
    Home: HomeScreen,
    DoubanMovie: DoubanMovie,
  },
);

const styles = StyleSheet.create({
  
  rowTitle: {
      fontSize: 18,
      textAlign: 'left',
  },

  separator: {
    backgroundColor: 0x313131,
    height:1,
  },

  container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
  },

});