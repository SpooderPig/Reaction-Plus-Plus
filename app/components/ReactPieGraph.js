import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import {Pie} from 'react-native-pathjs-charts';
import {reactions} from '../resources';
import renderIf from '../renderIf';

export default class ReactPieGraph extends Component {

  static propTypes = {
    display: PropTypes.bool.isRequired,
  }
  render() {
    const{display} = this.props;
    //console.log(reactions)
   let data = reactions['happy'] + reactions['disgusted'] + reactions['angry'] +  reactions['surprised'] + reactions['contemptuous'] + reactions['sad'] > 0 ? 
   [{
     "name": "Happy",
     "timesFelt": reactions['happy'],
   }, {
     "name": "Disgusted",
     "timesFelt": reactions['disgusted'],
   }, {
     "name": "Angry",
     "timesFelt": reactions['angry'],
   }, {
     "name": "Surprised",
     "timesFelt": reactions['surprised'],
   }, {
     "name": "Contemptuous",
     "timesFelt": reactions['contemptuous'],
   }, {
    "name": reactions['sad'] > 0 ? 'Sad' : '',
    "timesFelt": reactions['sad'],
   }]
   : 
   [{"name": "No Emotions Experiened Yet", timesFelt: 1}]
   
   let options = {
     /*margin: {
       top: 5,
       left: 20,
       right: 20,
       bottom: 20
     },*/
     width: 260,
     height: 260,
     color: '#2980B9',
     r: 25,
     R: 125,
     legendPosition: 'topLeft',
     animate: {
       type: 'oneByOne',
       duration: 200,
       fillTransition: 3
     },
     label: {
       fontFamily: 'Trebuchet MS',
       fontSize: 8,
       fontWeight: true,
       color: '#ECF0F1'
     },
   }

   return (
     <View style ={{
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection: 'row',
       paddingTop: 30,
       }}>
        {renderIf(this.props.display)(
          //<View style={{height: 20, }}/>,
          <Pie
            data= {data}
            options={options}
            accessorKey="timesFelt" />
        )}
        
       
     </View>
   );
 }
}