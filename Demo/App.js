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
  TouchableOpacity,
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

const dataList = [
  "豆瓣影院热映",
  "天气",
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
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}>
        </ListView>
    );
  }

  _renderRow = (rowData, sectionID, rowID, highlightRow) => {
          let rowIndex = Number(rowID) + 1;
          return (
            <TouchableOpacity onPress={ () => {
                alert(rowIndex+rowData);
            } }>
              <Text style={styles.rowTitle}> {rowIndex}. {rowData} </Text>
            </TouchableOpacity>
          );

  } ;

  _renderSeparator = (sectionID, rowID, adjacentRowHighlighted) => {
      return <View style={styles.separator}/>;
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
  }

});

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});



