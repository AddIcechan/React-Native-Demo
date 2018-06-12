
// Douban Movie

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  FetchResult,
} from 'react-native';

const inTheatersURL = "https://api.douban.com/v2/movie/in_theaters";


class MovieCell extends Component {

    render(){
        return(

            <View style={styles.container}>

                <Image style={styles.moviePoster} source={{uri: this.props.item.images[1]}} />
                    
                <View style={styles.columnContainer} >
                    <Text style={styles.movieTitle}> 
                        {this.props.item.title}
                    </Text>
                    <Text style={styles.movieInfo}>

                        {
                            
                        }

                    </Text>
                </View>

                <View style={styles.columnContainer}>

                </View>

            </View>
        );
    }

}

const testData = [ 
    {
        "rating": {
            "max": 10,
            "average": 4.4,
            "stars": "25",
            "min": 0
        },
        "genres": [
            "动作",
            "冒险"
        ],
    
        "actors": [
            "帕夏·帕特里基",
            "尚格·云顿"
        ],
    
        "title": "深海越狱",
    
        "collect_count": 3585,
        "original_title": "Black Water",
        "subtype": "movie",
        "year": "2018",
        "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2523364763.jpg",
        "alt": "https://movie.douban.com/subject/26949264/",
        "id": "26949264"
    } ];

export default class DoubanMovie extends React.Component {  

    constructor(props) {

        super(props);

        this.state = {
            noneData: [],
        };

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

 render() {
    return (
        
        <FlatList 
        data={this.state.items ? this.state.items : this.state.noneData}
        renderItem = {this._renderItem}
        keyExtractor = {this._keyExtractor}
         />
    );
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item, index}) => {
      return(
        <MovieCell item={item}/>
      );
  };



}

var styles = StyleSheet.create({

    // 外层容器
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    // 电影标题
    movieTitle: {
        color: 'black',
        fontSize: 20,
        padding: 8,
    },
    
    // 电影播放时间，演员名单等
    movieInfo: {
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
        backgroundColor: 'white',
        fontSize: 10,
        color: '#D95A62',
        borderRadius: 2,
        borderColor: '#D95A62',
        borderWidth: 1,
    }

});

// export default withNavigation(DoubanMovie);