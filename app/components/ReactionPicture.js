import React, {Component} from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';


export default class ReactionPicture extends Component {

  static propTypes = {
    urls: PropTypes.array.isRequired,
  }

  constructor() {

    super()

    const {height, width} = Dimensions.get('window');
    this.state = {
        height: height,
        width: width,
    }
  }
  handleLayout = () => {
    const {height, width} = Dimensions.get('window');
    this.setState({
      height: height,
      width: width,
    });
  }
  
  render() {
    const {urls} = this.props
    const{ height, width, } = this.state
    //console.log(urls)
    return(
      <View 
        onLayout = {this.handleLayout}
        style= {{backgroundColor: 'blue',
        width: width < height ? width : width * (6/8),
        height: height * (5/8)}}>
        <Image
          style = {{
            width: width < height ? width : width * (6/8),
            height: height * (5/8)}}
            resizeMode = 'contain'
            source = {urls[ Math.floor(Math.random() * urls.length) ]} />
      </View>

    );
  }

}