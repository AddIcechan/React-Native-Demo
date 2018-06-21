import React, { Component } from 'react';

import { createStackNavigator } from "react-navigation";

import HomeScreen from "./HomeScreen";
import DoubanMovie from "./day01/DoubanMovie";
import DBMovieRegion from './day01/DBMovieRegion';
import DBMovieCity from "./day01/DBMovieCity";
import FlexboxDemo from "./FlexboxDemo/FlexboxDemo";

import TextInputDemo from "./TextInputDemo/TextInputDemo";

const StackNavigatorView = createStackNavigator(
    {
      Home: HomeScreen,
      DoubanMovie: DoubanMovie,
      DBMovieRegion: DBMovieRegion,
      DBMovieCity: DBMovieCity,

      FlexboxDemo: FlexboxDemo,

      TextInputDemo: TextInputDemo,
    }
);

export default class CustomRouter extends Component {
    render() {
        return (
        <StackNavigatorView/>
        );
    }
}

  