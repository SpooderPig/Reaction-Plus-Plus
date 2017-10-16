import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import {ReactionIcon} from '../components';


  export default class ReactScreen extends Component {
    static propTypes = {
      navigation: PropTypes.object.isRequired
    };

    constructor() {
        super()
        
    }

    getRandomEmotion() {
      
      let emotions = ['happy', 'disgusted', 'angry', 'surprised', 'contemptuous', 'sad']
      return emotions[Math.floor(Math.random() * 6)]
    }

    render() {
        console.log(this.props.navigation.state.params)
        return(
            <View style={{height: 40, width: 40, backgroundColor: 'blue'}} />
        );
    }
  }