import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class ReactionInco extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        length: PropTypes.number.isRequired,
    }

    render() {
        const {url, length} = this.props
        return (
            <TouchableOpacity onPress={this.props.disabled ? emptyLambda : this.props.onPress}>
                <View style = {{backgroundColor: '#e5e5e5',
                                borderRadius: 3,
                                borderWidth: 1,
                                borderColor: 'black',
                                width: length + 10,
                                height: length + 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                }}>
                    <Image source = {{uri: url}} style = {{width: length, height: length,}}/>
                </View>
            </TouchableOpacity>
        );
    }

}