import React, { Component } from 'react';
import {  
    View, 
    Text, 
    Animated,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    LayoutAnimation,
} from 'react-native';

const {width, height} = Dimensions.get("window");

export default class AnimatedDemo extends Component {

    static navigationOptions = ({navigation, navigationOption}) => (
        {
            title: "热映电影",
    });

    // static navigationOptions = {
    //     title: "AnimatedDemo",
    //     header: ({state}) => {
    //                     return {
    //                         style: {
    //                             position: 'absolute',
    //                             top: 0,
    //                             left: 0,
    //                             right: 0,
    //                             overflow: 'hidden',
    //                         },
    //                     };
    //                 }
    // }
        
    

    animationBack() {
        const defaultOpactiy = new Animated.Value(0.3);

        const defaultTop = new Animated.Value(height);
        const defaultLeft = new Animated.Value(100);

        const moveBackAnimated = Animated.spring(
            this.state._top,
            {
                toValue: defaultTop,

            }
        );

        moveBackAnimated.start();
    }

    animationFun() {

        const moveAnimated = Animated.spring(
            this.state._top,
            {
                toValue: 50,

            }
        );

        const moveBackAnimated = Animated.spring(
            this.state._top,
            {
                toValue: 0,
            }
        );

        moveAnimated.start();

        // Animated.loop(Animated.sequence([moveAnimated, moveBackAnimated])).start();

    }

    layoutAnimationTest() {

    }

    constructor(props) {
        super(props);

        this._animatedValue = new Animated.Value(0);

        const defaultOpactiy = new Animated.Value(0.3);

        const defaultTop = new Animated.Value(height);
        const defaultLeft = new Animated.Value(100);

        this.state = ({
            _opacity: defaultOpactiy,
            _top: defaultTop,
            _left: defaultLeft,
        });
    };

    componentDidMount() {
        this.props.navigation.setParams({animatedValue: this._animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -80],
          extrapolate: 'clamp'
        })
      });
      }

    render() {
        console.log("screenHeight:" + height + "\n" + "screenWidth:" + width);
        
        return (
            <View>
                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                    <TouchableOpacity style={{flexDirection: 'row', alignContent: 'center',alignItems: 'center',justifyContent:'center', 
                    paddingRight: 12, width: 100, height: 50}}
                                    onPress= { () => {
                                        // Animated.event([{nativeEvent: {contentOffset: {y: this._animatedValue}}}]);
                                    } }>
                        <Text style={{fontSize: 16,color:'black'}}>点击开始动画</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', alignContent: 'center',alignItems: 'center',justifyContent:'center', 
                    paddingRight: 12, width: 100, height: 50}}
                                    onPress= { () => {
                                        this.animationBack();
                                    } }>
                        <Text style={{fontSize: 16,color:'black'}}>点击恢复动画</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', alignContent: 'center',alignItems: 'center',justifyContent:'center', 
                    paddingRight: 12, width: 100, height: 50}}
                                    onPress= { () => {
                                        LayoutAnimation.linear();
                                        this.setState({
                                            _top: -50,
                                        });
                                    } }>
                        <Text style={{fontSize: 16,color:'black'}}>LayoutAnimationStart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', alignContent: 'center',alignItems: 'center',justifyContent:'center', 
                    paddingRight: 12, width: 100, height: 50}}
                                    onPress= { () => {
                                        LayoutAnimation.linear();
                                        this.setState({
                                            _top: height,
                                        });
                                    } }>
                        <Text style={{fontSize: 16,color:'black'}}>LayoutAnimationBack</Text>
                    </TouchableOpacity>
                {/* <Animated.View style={{opacity: this.state._opacity, 
                 width: 50, height: 50, backgroundColor: 'blue', position: "absolute",top: this.state._top,left: this.state._left}}/> */}

                </View>
                <Animated.View style={{width: width, height: height,  flexDirection: 'column',alignContent: 'center',alignItems: 'center',
                                        justifyContent:'center',backgroundColor: 'yellow',position:"absolute",
                                        top: this.state._top, left: 0,
                                    }} >
                    <TouchableOpacity style={{alignContent: 'center',alignItems: 'center',justifyContent:'center', 
                    paddingRight: 12, width: 100, height: 50}}
                                    onPress= { () => {
                                        LayoutAnimation.linear();
                                        this.setState({
                                            _top: height,
                                        });
                                    } }>
                        <Text style={{fontSize: 16,color:'black'}}>LayoutAnimationBack</Text>
                    </TouchableOpacity>        
                </Animated.View>
            </View>
            
        );
    }
}