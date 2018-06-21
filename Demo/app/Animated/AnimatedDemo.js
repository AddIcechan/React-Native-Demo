import React, { Component } from 'react';
import {  
    View, 
    Text, 
    Animated,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class AnimatedDemo extends Component {

    static navigationOptions = ({navigation, navigationOption}) => (
        {
            title: "热映电影",
    });

    animationFun() {
        // Animated.timing(
        //     this.state._top,
        //     {
        //         toValue: 300,
        //         duration: 2,
        //         // useNativeDriver: true,
        //     }
        // ).start();

        const moveAnimated = Animated.spring(
            this.state._top,
            {
                toValue: 300,
            }
        );

        const moveBackAnimated = Animated.spring(
            this.state._top,
            {
                toValue: 100,
            }
        );

        Animated.loop(Animated.sequence([moveAnimated, moveBackAnimated])).start();

        // Animated.spring(
        //     this.state._top,
        //     {
        //         toValue: 300,
        //     }
        // ).start();
    }

    constructor(props) {
        super(props);

        const defaultOpactiy = new Animated.Value(0.3);

        const defaultTop = new Animated.Value(200);
        const defaultLeft = new Animated.Value(100);

        this.state = ({
            _opacity: defaultOpactiy,
            _top: defaultTop,
            _left: defaultLeft,
        });
    };

    render() {

        return (
            <View style={{flexDirection: 'column',alignItems: 'center'}}>
                <TouchableOpacity style={{flexDirection: 'row', alignContent: 'center',alignItems: 'center',justifyContent:'center', 
                paddingRight: 12, width: 100, height: 50}}
                                onPress= { () => {
                                    this.animationFun();
                                } }>
                    <Text style={{fontSize: 16,color:'black'}}>点击开始动画</Text>
                </TouchableOpacity>
                <Animated.View style={{opacity: this.state._opacity, 
                 width: 50, height: 50, backgroundColor: 'blue', position: "absolute",top: this.state._top,left: this.state._left}}/>
            </View>
        );
    }
}