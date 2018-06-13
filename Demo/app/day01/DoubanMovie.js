
// Douban Movie

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableHighlight,
} from 'react-native';

const inTheatersURL = "https://api.douban.com/v2/movie/in_theaters";

class MovieCell extends Component {

    static navigationOptions = {
        title: "Douban Movie",
    }

    render(){

        return(

            <View style={styles.container}>

                <Image style={[styles.moviePoster]} source={{uri: this.props.item.images.medium}} />
                    
                <View style={[styles.columnContainer, {flex: 2,}]} >
                    <Text style={styles.movieTitle}> 
                        {this.props.item.title}
                    </Text>
                    <Text style={styles.movieInfo}>
                        {
                            this.props.item.year + " / "
                             + this.props.item.directors.map(director => director.name).join(" / ")
                              + this.props.item.casts.map( cast =>{ return cast.name}).join(" / ")
                        }
                    </Text>
                </View>

                <View style={[styles.columnContainer, {flex: 1,}]}>
                    <Text style={styles.peopleWatch}> {this.props.item.collect_count} 人看过 </Text>
                    <TouchableHighlight style={styles.buyBtn} 
                    onPress={() => alert("这是个假功能")}> 
                      <Text style={{fontSize: 10,color: '#D95A62',}}>购票</Text>
                    </TouchableHighlight>
                    {/* <Button style={styles.buyBtn} title={"购票"} onPress={() => alert("fake")}/> */}
                </View>

            </View>
        );
    }

}

var styles = StyleSheet.create({

    // 外层容器
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // justifyContent: 'space-around',
        padding: 20,
        backgroundColor: 'white',
    },

    // 海报
    moviePoster: {
        width: 78,
        height: 100,
        backgroundColor: 'gray',
    }, 

    // column 容器 
    columnContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    // 电影标题
    movieTitle: {
        flex: 1,
        color: 'black',
        fontSize: 20,
        padding: 8,
    },
    
    // 电影播放时间，演员名单等
    movieInfo: {
        flex: 2,
        color: '#313131',
        fontSize: 12,
        padding: 8,
    },

    // 有多少人看过
    peopleWatch: {
        color: '#D95A62',
        fontSize: 9,
    },

    buyBtn: {
        width: 50,
        height: 24,
        borderRadius: 2,
        borderColor: '#D95A62',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 8,
        marginTop: 8,
        padding: 2,
        alignItems:'center',  
        justifyContent: 'center',  
    }

});

export default class DoubanMovie extends React.Component {  

    constructor(props) {

        super(props);

        this.state = {
            noneData: [],
        };

        this._refreshControl();

    };

 render() {
    return (
        
        <FlatList 
        // 因为网络数据加载是异步的，所以这里的 data 需要进行判断。可以是 this.state.items ? this.state.items : [] , 也可以是如下面给个初值
        data={this.state.items ? this.state.items : this.state.noneData}
        renderItem = {this._renderItem}
        keyExtractor = {this._keyExtractor}
        refreshControl = {this._refreshControl}
         />
    );
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item, index}) => {
      return(
        <MovieCell item={item}/>
      );
  };

  _refreshControl = () => {
    fetch(inTheatersURL)
    .then((response) => response.json())
    .then( (responseJSON) => {
        console.log(responseJSON.subjects);
        
        this.setState({
            items: responseJSON.subjects
        });
    })
    .catch(error =>  { 
        console.error(); 
    });
  };
  

}
