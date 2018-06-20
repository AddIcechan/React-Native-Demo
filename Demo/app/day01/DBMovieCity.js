import React, { Component } from 'react';
import {  
    View, 
    Text, 
    FlatList,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';

import { cities } from "./Cities";

export default class DBMovieCity extends Component {

    static navigationOptions = ({navigation}) => ({ title: navigation.getParam("provinces", "省份"), });

    constructor(props) {
        super(props);
        
        const provinces = this.props.navigation.getParam("provinces", "省份");

        const citiesInThisProvinces = cities["" + provinces + ""].map((element, index) => ({key: "" + index + "", city: element}));
        
        this.state = {
            cities: citiesInThisProvinces,
        };

    }

    render() {
        return (
        <SafeAreaView>
            <FlatList 
                data = {this.state.cities}
                renderItem = {this.renderItem}
                ItemSeparatorComponent = {() => <View style={{backgroundColor: 'gray',}}/>}
            />
        </SafeAreaView>
        );
    }

    renderItem = ({item}) => (
        <TouchableOpacity key={item.key}
                         onPress={() => {
                            this.props.navigation.state.params.callback(item.city);
                            this.props.navigation.pop("DoubanMovie");
                         }}>
            <Text style={{fontSize: 18, padding: 20, backgroundColor: 'white'}}>{item.city}</Text>
        </TouchableOpacity>
    )
    





}
