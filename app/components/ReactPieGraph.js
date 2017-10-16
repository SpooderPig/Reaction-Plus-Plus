import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import {Pie} from 'react-native-pathjs-charts';

export default class ReactPieGraph extends Component {
 render() {
   let data = [{
     "name": "Happy",
     "percentage": 0.1
   }, {
     "name": "Disgusted",
     "percentage": 0.1
   }, {
     "name": "Angry",
     "percentage": 0.1
   }, {
     "name": "Surprised",
     "percentage": 0.1
   }, {
     "name": "Contemptuous",
     "percentage": 0.1
   }, {
     "name": "Sad",
     "percentage": 0.1
   }]

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
       fontFamily: 'Arial',
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
       <View style={{height: 20, }}/>
       <Pie
         data={data}
         options={options}
         accessorKey="percentage" />
     </View>
   )
 }
}