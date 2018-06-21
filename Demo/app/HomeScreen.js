import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';

const dataList = [
    {key: 'a' ,title: "豆瓣影院热映"},
    {key: 'b', title: "Flex Box Demo"},
    {key: 'c', title: "TextInputDemo"},
];

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: "Home",
    }

    render(){

        const { navigation } = this.props;

        return(
        <FlatList
            data={dataList}
            renderItem={this._renderItem}
            ItemSeparatorComponent={this._ItemSeparatorComponent}
            renderRow={this._renderRow}
            renderSeparator={this._renderSeparator}
            />
        );
    }

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

        const navigation = this.props.navigation;

        switch (index) {
            case 0:
            {
                navigation.push('DoubanMovie');
            }
            break;
            case 1:
            {
                navigation.push('FlexboxDemo');
            }
            case 2:
            {
                navigation.push('TextInputDemo');
            }
            break;
            default:
            break;
        };
    };
  

}

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