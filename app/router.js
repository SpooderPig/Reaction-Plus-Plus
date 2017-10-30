import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { HomePage, ReactScreen, UploadScreen } from './screens';

export default Root = StackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      title: 'Welcome!',
      headerBackTitle: 'Upload',
      headerTintColor: Platform.OS === 'ios' ? null : 'white',
      headerStyle: Platform.OS === 'ios' ? {} : {
        height: 56 + StatusBar.currentHeight, // 56 = Header/Toolbar spec
        paddingTop: StatusBar.currentHeight, // StatusBar height
        backgroundColor: '#2196f3',
      },
    },
  },

  ReactScreen: {
    screen: ReactScreen,
    navigationOptions: {
      title: 'React!',
      headerTintColor: Platform.OS === 'ios' ? null : 'white',
      headerStyle: Platform.OS === 'ios' ? {} : {
        height: 56 + StatusBar.currentHeight, // 56 = Header/Toolbar spec
        paddingTop: StatusBar.currentHeight, // StatusBar height
        backgroundColor: '#2196f3',
      },
    },
  },

  UploadScreen: {
    screen: UploadScreen,
    navigationOptions: {
      title: 'Upload',
      headerBackTitleStyle: {
        backgroundColor: '#2196f3',
        opacity: 0,
      },
      header: null,
      headerTintColor: Platform.OS === 'ios' ? null : 'white',
      headerStyle: Platform.OS === 'ios' ? {} : {
        height: 56 + StatusBar.currentHeight, // 56 = Header/Toolbar spec
        paddingTop: StatusBar.currentHeight, // StatusBar height
        backgroundColor: '#2196f3',
      },
    },
  },
  
})