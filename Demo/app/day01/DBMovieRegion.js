
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

        const sections = [  {
            title: "热门城市",
            data:  [popularCities],
            renderItem: this._renderPopularSection },
        ];

        const capitals = []
        for (let index = 0; index < provinces.length; index++) {
            const element = provinces[index];
            if (element.data.length > 0) {
                sections.push(element)
                capitals.push({key: element.title, title: element.title})
            }
        }

        this.state = {
            sections: sections,
            capitals: capitals
        };
    };

    render() {
        return (
            <View style={{flex: 1,flexDirection: 'row',alignItems: 'center',backgroundColor:'#F4F4F4'}}>
                <SectionList ref="citySectionList" 
                            sections={this.state.sections}
                            renderItem={this._renderItem}
                            renderSectionHeader={this._renderSectionHeader}
                            ItemSeparatorComponent={({index}) => <View key={index} style={{backgroundColor:'#F4F4F4'}}/>}
                            keyExtractor={this._keyExtractor}
                />
                <FlatList style={{backgroundColor:'#F4F4F4'}} 
                          data={this.state.capitals}
                          renderItem={this._renderFlatListItem}
                />
            </View>
        );
    }

    _renderFlatListItem = ({item, index}) => (
            <TouchableOpacity key={index} onPress={() => this._scrollToCitySection(index)}>
                <Text style={{fontSize:12, color:"#3D80E6", paddingBottom: 4,}}>{item.title}</Text>
            </TouchableOpacity>
    );

    _scrollToCitySection = (index) => {
        console.log(index);
        this.refs.citySectionList.scrollToLocation({itemIndex: 0, sectionIndex: (index + 1), viewOffset: 40});
    };

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
                key={index} 
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
