import React, { Component } from 'react';
import {  
    View, 
    Text, 
    StyleSheet,
} from 'react-native';



class FlexboxDemo extends Component {
    static navigationOptions = {
        title: "FlexboxDemo",
    }
    render() {
        return (
            <View style={{flex: 1,flexDirection: 'column',}}>
                 <View style={[{backgroundColor:'gray', height: 80}]}/>
                 <View style={[{flex: 1, backgroundColor:'yellow'}]}/>
            </View>
        );
    }
}

class FlexboxDemo1 extends Component {
    static navigationOptions = {
        title: "FlexboxDemo1",
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

export {FlexboxDemo, FlexboxDemo1};

// export default class FlexboxDemo extends Component {
   
// }

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