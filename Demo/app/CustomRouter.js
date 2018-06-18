import React, { Component } from 'react';

import { createStackNavigator } from "react-navigation";

import HomeScreen from "./HomeScreen";
import DoubanMovie from "./day01/DoubanMovie";
import DBMovieRegion from './day01/DBMovieRegion';
import FlexboxDemo from "./FlexboxDemo/FlexboxDemo";

const StackNavigatorView = createStackNavigator(
    {
      Home: HomeScreen,
      DoubanMovie: DoubanMovie,
      DBMovieRegion: DBMovieRegion,
  
      FlexboxDemo: FlexboxDemo,
    }
);

export default class CustomRouter extends Component {
  render() {
    return (
      <StackNavigatorView/>
    );
  }
}

  