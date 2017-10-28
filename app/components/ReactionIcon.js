import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';

export default class ReactionIcon extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        length: PropTypes.number.isRequired,
    }

    render() {
        const {title, url, length} = this.props
        return (
            <TouchableOpacity onPress={this.props.disabled ? emptyLambda : this.props.onPress}>
                <View style = {{backgroundColor: '#e5e5e5',
                                borderRadius: 3,
                                borderWidth: 1,
                                borderColor: 'black',
                                width: length + 25,
                                height: length + 25,
                                alignItems: 'center',
                                justifyContent: 'center',
                                }}>
                    <Image source = {{uri: url}} style = {{width: length, height: length,}}/>
                    <Text style = {{fontSize: 11,}}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}