import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import List from './components/List';


const Tabs = createAppContainer(
  createBottomTabNavigator({
    About: {screen:About},
    Search: {screen: Search},
    // Result: { screen : List}
  }, {
    tabBarOptions:{
      showIcon: true,
      showLabel:false,
      indicatorStyle: {
        height: 2,
        backgroundColor: "#ff5b00"
      },
      style: {
        backgroundColor:"#a2273C",
        borderTopWidth: 1,
        borderColor: "#5f0085"
      }
    }
  })
)




export default class App extends React.Component {
  
  render() {

    return (
      <View style={{flex:1}}>
        <StatusBar hidden={true}/>
        <Tabs />
     </View>
    );
  }
}


