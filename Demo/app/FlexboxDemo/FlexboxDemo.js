import React, { Component } from 'react';
import {  
    View, 
    Text, 
    StyleSheet,
} from 'react-native';

export default class FlexboxDemo extends Component {
    static navigationOptions = {
        title: "FlexboxDemo",
    }
    render() {
        return (
            <View style={styles.container}>
                 <View style={[styles.column, {flex: 1,backgroundColor:'gray'}]}/>
                 <View style={[styles.column, {flex: 2, backgroundColor:'yellow'}]}/>
                 <View style={[styles.column, {flex: 3, backgroundColor:'red'}]}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    column: {
        flex: 2,
    },
});