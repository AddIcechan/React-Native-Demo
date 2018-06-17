
import React, { Component } from 'react';
import {  
    View, 
    Text, 
    SectionList,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import {popularCities, provinces, cities} from "../day01/Cities";

export default class DBMovieRegion extends Component {

    static navigationOptions = {
        title: "地区",
    };

    constructor(props) {
        super(props);

        const capitals = []

        for (let index = 65; index < 91; index++) {
            capitals.push(String.fromCharCode(index))
        }
        console.log(provinces);
        console.log(cities);
        
        
        const sections = [  {
            title: "热门城市",
            data:  [popularCities],
            renderItem: this._renderPopularSection },
            // provinces
        ];

        for (let index = 0; index < provinces.length; index++) {
            const element = provinces[index];
            if (element.data.length > 0) {
                sections.push(element)
            }
        }

        this.state = {
            sections: sections,
        };
    };

    render() {
        return (

            <SectionList sections={this.state.sections}
                        renderItem={this._renderItem}
                        renderSectionHeader={this._renderSectionHeader}
                        ItemSeparatorComponent={() => <View style={{backgroundColor:'#F4F4F4'}}/>}
                        keyExtractor={this._keyExtractor}
                        />
        );
    }

    _renderSectionHeader = ({section: {title}}) => (
        <Text style={styles.sectionHeader}>{title}</Text>
    );

    _keyExtractor=(item, index) => item + index;

    _renderItem = ({item, index, section: {title, data}}) => (
        <TouchableOpacity style={{padding: 10,backgroundColor:'white'}}
        onPress={()=>alert(item)}>
            <Text key={index} style={{fontSize: 16, paddingLeft: 10,}} >{item}</Text>
        </TouchableOpacity>
    );

    _renderPopularSection = ({item, index, section: {title, data}}) => {

        const items = [];
        
        for (let index = 0; index < item.length; index++) {
            const element = item[index];
            
            items.push(
                <TouchableOpacity 
                style={styles.sectionPopularItem}
                onPress={()=> alert(element)}>
                    <Text style={{fontSize: 17, alignSelf: 'center',}} >{element}</Text>
                </TouchableOpacity>
            )
        }

        return <View style={{flexDirection: "row",
                            flex: 1,
                            flexWrap: 'wrap',
                            justifyContent: "space-between",
                            paddingLeft: 14,
                            paddingRight: 14,
                            paddingBottom: 14,
                            backgroundColor: '#F4F4F4',
                            }} >
            {items}
        </View>

    };
    
}

const styles = StyleSheet.create({

    sectionHeader: {
        fontSize: 14,
        padding: (14,8,8,8),
        backgroundColor: '#F4F4F4',
        color: '#A1A1A1',
    },

    sectionPopularItem: {
        justifyContent:'center',
        alignItems: 'center',
        width:100,
        height:30,
        marginTop: 14,
        backgroundColor: 'white',
        borderColor: '#A1A1A1',
        borderRadius: 3,
        borderWidth: 1,
    }
});
