import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import {data} from '../resources'
import {ReactionIcon, ReactionPicture} from '../components';


  export default class ReactScreen extends Component {
    static propTypes = {
      navigation: PropTypes.object.isRequired
    };

    constructor() {
        super()
        const {height, width} = Dimensions.get('window')
        this.state = {
          height: height,
          width: width,
          IconLength: 60
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

      const { height, width, IconLength } = this.state
      let emotions = ['happy', 'disgusted', 'angry', 'surprised', 'contemptuous', 'sad']
      imageEmotion = this.props.navigation.state.params != 'random' ? 
        emotions.indexOf(this.props.navigation.state.params) : Math.floor(Math.random() * 6)
      return(
          <View
            onLayout = {this.handleLayout} 
            style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
            <ReactionPicture 
            urls = {data[imageEmotion]}/>
            <View style = {{
              flexDirection: height > width ? 'column' : 'row'
            }}>
              <View style= {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',}}>
                <ReactionIcon
                  onPress={() => navigate('ReactScreen', 'happy')}
                  title = 'Happy'
                  url = {'https://images.vexels.com/media/users/3/134594/isolated/preview/cb4dd9ad3fa5ad833e9b38cb75baa18a-happy-emoji-emoticon-by-vexels.png'}
                length = {IconLength} />           
                <ReactionIcon
                  onPress={() => navigate('ReactScreen', 'disgusted')}
                  title = 'Disgusted' 
                  url = {'https://images.vexels.com/media/users/3/143979/isolated/preview/9408a458343fcccd09ac1c10a213ca20-surprised-emoji-face-by-vexels.png'}
                  length = {IconLength} />
                          
                <ReactionIcon
                  onPress={() => navigate('ReactScreen', 'angry')}
                  title = 'Angry'
                  url = {'https://images.vexels.com/media/users/3/134532/isolated/preview/d581f126c5879e12de9620372d6ff4ca-emoji-angry-emoticon-by-vexels.png'}
                  length = {IconLength} />

                <ReactionIcon
                  title = 'Suprised'
                  onPress={() => navigate('ReactScreen', 'surprised')}
                  url = {'https://images.vexels.com/media/users/3/134774/isolated/preview/1dd9087d6e59053028c07574aff757d0-shock-surprised-emoji-emoticon-by-vexels.png'}
                  length = {IconLength} />
                          
              </View>

              <View style={{height: IconLengthBetween}} />
                <View style= {{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                  <ReactionIcon 
                    url = {'https://images.vexels.com/media/users/3/134542/isolated/preview/ec55d1a1c13bd8f879b3257585ee0fe5-emoji-emoticon-angry-by-vexels.png'}
                    length = {IconLength}
                    title = 'Contemptuous'
                    onPress={() => navigate('ReactScreen', 'contemptuous')} />
                  <ReactionIcon 
                    url = {'https://images.vexels.com/media/users/3/134491/isolated/preview/c4aed5e8b55387c429d1f9b36a9859b2-cry-emoji-emoticon-by-vexels.png'}
                      length = {IconLength}
                      title = 'Sad'
                      onPress={() => navigate('ReactScreen', 'sad')}/>
                  <ReactionIcon 
                    url = {'https://img.clipartxtras.com/3fa063068896e385bc58bd48f0562caf_grey-question-mark-transparent-background-image-info-question-mark-clipart-no-background_500-500.png'}
                    length = {IconLength}
                    title = 'Random'
                    onPress={() => navigate('ReactScreen', 'random')} />
                </View>
              </View>
          </View>

        );
    }
  }