import React, {Component} from 'react';
import {
    View
} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import {data} from '../resources'
import {NavButton} from '../components'


export default class UploadScreen extends Component {

    constructor() {
        super();
        this.state = {
            userAdded: [],
        }
        this.getSelectedImages = this.getSelectedImages.bind(this)
    }
    getSelectedImages(images, current) {
        //var num = images.length;
        
        this.setState({
          userAdded: images
        });
        
      }

    render() {
        const {navigate} = this.props.navigation;
        const {userAdded} = this.state;
        console.log(userAdded)
        return(
            <View style = {{
              flex: 1,  
            }}>
                <CameraRollPicker
                    callback={this.getSelectedImages}
                    groupTypes = {'All'}
                    assetType = {'All'} />
                <NavButton
                    title = {'Submit'}
                    color = {'gray'}
                    height = {40} 
                    onPress = {() => navigate('HomePage', userAdded)}/>
            </View>
        );
    }
}