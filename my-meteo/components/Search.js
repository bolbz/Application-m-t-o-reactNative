import React from 'react'
import {TextInput, Image, View, Button} from 'react-native'
import style from './Style'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import List from './List';



class Search extends React.Component{

    static navigationOptions = {
        title: 'Rechercher une ville',
        tabBarIcon: () => {
           return <Image source={require('./icons/search.jpg')} style={{width: 20, height: 20}}></Image>
        }
      }

    constructor(props){
        super(props)
        this.state = {
            city: 'Montpellier'
        }
    }

    setCity (city) {
        this.setState({city})
    }

    submit(){
        this.props.navigation.navigate('List', {city: this.state.city})
    }

    render(){
        return(
           <View style={style.container}>
                <TextInput
                underlineColorAndroid= 'transparent'
                onChangeText={(text) => this.setCity(text)}
                style={style.input}
                value={this.state.city} 
                />
                <Button color={style.color} onPress={() => this.submit()} title = "Rechercher" />
            </View>
              )
    }
}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle : style.headerTitle
}

const MainStack= createStackNavigator(
    {
    Search: {
        screen : Search,
        navigationOptions
    },
    List:{
        screen: List,
        navigationOptions
    },
},
{
    initialRouteName: 'Search',
    mode: 'card'
} );

const App = createAppContainer(MainStack);
export default App;

