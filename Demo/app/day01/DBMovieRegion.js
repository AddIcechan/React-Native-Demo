
import React, { Component } from 'react';
import {  
    View, 
    Text, 
    SectionList,
    StyleSheet,
    TouchableHighlight,
    FlatList,
} from 'react-native';

import Cities from "../day01/Cities";

const popularCities = [
    "北京",
    "上海",
    "广州",
    "深圳",
    "成都",
    "武汉",
    "杭州",
    "重庆",
    "郑州",
    "南京",
    "西安",
    "苏州",
    "天津",
    "长沙",
    "福州",
];

export default class DBMovieRegion extends Component {

    static navigationOptions = {
        title: "地区",
    };

    constructor(props) {
        super(props);

        const sections = [  {
            title: "热门城市",
            data:  [popularCities],
            renderItem: this._renderPopularSection }
        ];

        this.state = {
            sections: sections,
        };
    };

    render() {
        return (

            <SectionList sections={this.state.sections}
                        renderItem={this._renderItem}
                        renderSectionHeader={this._renderSectionHeader}
                        keyExtractor={this._keyExtractor}/>
        );
    }

    _renderSectionHeader = ({section: {title}}) => (
        <Text style={styles.sectionHeader}>{title}</Text>
    );

    _keyExtractor=(item, index) => item + index;

    _renderItem = ({item, index, section: {title, data}}) => (

        <Text key={index} style={styles.sectionPopularItem} >{item}</Text>
    );

    _renderPopularSection = ({item, index, section: {title, data}}) => {

        const items = [];
        
        for (let index = 0; index < item.length; index++) {
            const element = item[index];
            
            items.push(
                <TouchableHighlight 
                style={[styles.sectionPopularItem, 
                        {justifyContent:'center',
                        alignItems: 'center',
                        width:100,
                        height:30,
                        marginTop: 14,}]}
                onPress={()=> alert(element)}>
                    <Text style={{fontSize: 17, alignSelf: 'center',}} >{element}</Text>
                </TouchableHighlight>
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
        backgroundColor: 'white',
        borderColor: '#A1A1A1',
        borderRadius: 3,
        borderWidth: 1,
        fontSize: 17,
    },
});
