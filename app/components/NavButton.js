import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

export default class NavButton extends Component {
    static PropTypes = {
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
    }

    constructor() {
        super();
        const {width} = Dimensions.get('window').width;
        this.state = {
          width,
        };
      }

    render() {
        

        const {title, color, height} = this.props;
        const {width} = this.state;
        return(
            <TouchableOpacity onPress={this.props.disabled ? emptyLambda : this.props.onPress}>
            <View style= {{
                backgroundColor: color, 
                width: this.state.width,
                height: height,
                justifyContent: 'center'}}>
                <Text style = {{fontSize: 25, fontFamily: 'Helvetica Neue', textAlign: 'center',}}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
        );
    }
}