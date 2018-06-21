
import React, { Component } from 'react';
import {  
    View, 
    Text, 
    SectionList,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    TextInput,
    Image,
} from 'react-native';

import { SafeAreaView } from "react-navigation";

import {popularCities, provinces, cities} from "../day01/Cities";
import { white } from 'ansi-colors';

const municipalities = ["北京", "上海", "天津", "重庆"];

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
            <SafeAreaView style={{backgroundColor:'white'}}>
                {/* <View style={{height: 60, paddingLeft: 20,paddingRight: 20,paddingTop: 8,paddingBottom: 8,}}> */}
                    <View style={styles.searcthTextInputBg} >
                        <Image style={styles.searcthTextInputIcon}
                                source={require("../sources/search.png")}/>
                        <TextInput style={styles.searcthTextInput}
                                    clearButtonMode="while-editing" 
                                    placeholder=" 输入城市名查询"
                                    
                                    />
                    </View>
                {/* </View> */}
                
                <View style={{flexDirection: 'row',alignItems: 'center',backgroundColor:'#F4F4F4'}} >
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

            </SafeAreaView>
        );
    }

    _renderFlatListItem = ({item, index}) => (
            <TouchableOpacity key={index} onPress={() => this._scrollToCitySection(index)}>
                <Text style={{fontSize:12, color:"#3D80E6", paddingBottom: 4,}}>{item.title}</Text>
            </TouchableOpacity>
    );

    _scrollToCitySection = (index) => {
        this.refs.citySectionList.scrollToLocation({itemIndex: 0, sectionIndex: (index + 1), viewOffset: 40});
    };

    _renderSectionHeader = ({section: {title}}) => (
        <Text style={styles.sectionHeader}>{title}</Text>
    );

    _keyExtractor=(item, index) => item + index;

    _renderItem = ({item, index, section: {title, data}}) => {
        
        return (<TouchableOpacity style={{padding: 10,backgroundColor:'white'}}
                    onPress={ () => {
                        const navigation = this.props.navigation;

                        if (municipalities.indexOf(item) < 0) {
                            // 进入对应的地级市选择
                            const params = {
                                provinces: item, 
                                callback: (city) => {
                                    navigation.state.params.callback(city);
                                },
                            };
                            navigation.push("DBMovieCity",params);
                        } else {
                            // 直辖市直接 pop 回传
                            navigation.state.params.callback(item);
                            navigation.pop();
                        }
                    }}>
                    <Text key={index} style={{fontSize: 16, paddingLeft: 10,}} >{item}</Text>
                </TouchableOpacity>);
    };

    _renderPopularSection = ({item, index, section: {title, data}}) => {

        const items = [];
        
        for (let index = 0; index < item.length; index++) {
            const element = item[index];
            
            items.push(
                <TouchableOpacity
                key={index} 
                style={styles.sectionPopularItem}
                onPress={()=>{
                    this.props.navigation.state.params.callback(element);
                    this.props.navigation.pop();
                }}>
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
    },

    searcthTextInputBg: {
        flexDirection: 'row',
        height: 60,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 10,
        paddingBottom: 10,
    },

    searcthTextInputIcon: {
        padding: 10,
        marginRight: 4,
        alignSelf: 'center',
    },

    searcthTextInput: {
        flex: 1, 
        backgroundColor: '#F4F4F4', 
        borderRadius: 3,
        paddingLeft: 4,
        color: 'black',
    },
});
