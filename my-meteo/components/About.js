import React from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'

import style from './Style'


export default class About extends React.Component{

  static navigationOptions = {
    tabBarIcon: () => {
       return <Image source={require('./icons/user.png')} style={{width: 20, height: 20}}></Image>
    }
  }

  search (){
    this.props.navigation.navigate('Search')
  }

  render(){
    return(
      <View style={style.container}>
          <Text style={style.title} >A propos de l' application de la météo!</Text>
          <Text>Regardez la météo de toutes les ville de France!</Text>
          <Button color={style.color} onPress={() => this.search()} title="Rechercher une ville" />
      </View>
    )
  }


}


