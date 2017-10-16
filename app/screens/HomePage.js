import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import {ReactionIcon, ReactPieGraph} from '../components';
import {ReactScreen} from '../screens';


export default class HomePage extends Component {
    constructor() { 
    super()

    this.state = {
        IconLength: 60,
    }

    }

    


    render = () => {
        const {IconLength} = this.state;
        IconLengthBetween = this.state.IconLength / 3;
        const {navigate} = this.props.navigation;
    
        return(
            <View>
                <Text style ={{
                    textAlign: 'center',
                    fontSize: 30,
                    fontFamily: 'Trebuchet MS'
                }}> 
                    Choose an Icon 
                </Text>
                <View style={{height:10}} />
                <View style= {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',}}>
                    <ReactionIcon
                    onPress={() => navigate('ReactScreen', 'happy')}
                    url = {'https://images.vexels.com/media/users/3/134594/isolated/preview/cb4dd9ad3fa5ad833e9b38cb75baa18a-happy-emoji-emoticon-by-vexels.png'}
                    length = {IconLength} />
                    
                    <ReactionIcon
                    onPress={() => navigate('ReactScreen', 'disgusted')} 
                    url = {'https://images.vexels.com/media/users/3/143979/isolated/preview/9408a458343fcccd09ac1c10a213ca20-surprised-emoji-face-by-vexels.png'}
                    length = {IconLength} />
                    
                    <ReactionIcon
                    onPress={() => navigate('ReactScreen', 'angry')}
                    url = {'https://images.vexels.com/media/users/3/134532/isolated/preview/d581f126c5879e12de9620372d6ff4ca-emoji-angry-emoticon-by-vexels.png'}
                    length = {IconLength} />

                    <ReactionIcon
                    onPress={() => navigate('ReactScreen', 'surprised')}
                    url = {'https://images.vexels.com/media/users/3/134774/isolated/preview/1dd9087d6e59053028c07574aff757d0-shock-surprised-emoji-emoticon-by-vexels.png'}
                    length = {IconLength} />
                    
                </View>

                <View style={{height: IconLengthBetween}} />

                <View style= {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                    <ReactionIcon 
                    url = {'https://images.vexels.com/media/users/3/134542/isolated/preview/ec55d1a1c13bd8f879b3257585ee0fe5-emoji-emoticon-angry-by-vexels.png'}
                    length = {IconLength}
                    onPress={() => navigate('ReactScreen', 'contemptuous')} />
                    <View style={{width: IconLengthBetween}}/>
                    <ReactionIcon 
                    url = {'https://images.vexels.com/media/users/3/134491/isolated/preview/c4aed5e8b55387c429d1f9b36a9859b2-cry-emoji-emoticon-by-vexels.png'}
                    length = {IconLength}
                    onPress={() => navigate('ReactScreen', 'sad')}/>
                    <View style={{width: IconLengthBetween}}/>
                    <ReactionIcon 
                    url = {'https://img.clipartxtras.com/3fa063068896e385bc58bd48f0562caf_grey-question-mark-transparent-background-image-info-question-mark-clipart-no-background_500-500.png'}
                    length = {IconLength}
                    onPress={() => navigate('ReactScreen', 'random')} />
                    
                </View>
                
                <View style ={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 10}}>
                    <Text style = {{fontSize: 18, fontFamily: 'Trebuchet MS'}} >
                        Emotions Experienced Today
                    </Text>
                    </View>
                <View style = {{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                    <ReactPieGraph />
                </View>

            </View>
        );
    }
}

