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
  ListView,
  FlatList,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

const dataList = [
  {key: 'a' ,title:"豆瓣影院热映"},
];

class HomeScreen extends Component {

  static navigationOptions = {
      title: "home",
  }

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(dataList)
    }
  }

  render(){
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
      onPress={() => { Alert.alert(item.key, item.title) } }>
        <Text style={styles.rowTitle}> {rowIndex}. {item.title} </Text>
        <Image style={styles.rowIndicator} source={require('./sources/indicator_right.png')} />
      </TouchableOpacity>
    );
  };

  _ItemSeparatorComponent = () => {
      return <View style={styles.separator}/>;
  };

  _onPress = (title:string, index) => {
    alert(index+title);
  };
  

}

const styles = StyleSheet.create({
  
  rowTitle: {
      fontSize: 18,
      textAlign: 'left',
      margin: 20,
  },

  separator: {
    backgroundColor: 0x313131,
    height:1,
  },

  rowIndicator: {
      marginRight: 20,
  },

  container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'space-between',
      alignItems: 'center',
  },

});

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});



