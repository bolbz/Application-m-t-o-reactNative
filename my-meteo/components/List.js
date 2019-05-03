import React from 'react'
import { Text, ActivityIndicator, ListView, Image } from 'react-native'
import axios from 'axios'
import style from './Style'
import WeatherRow from './Weather/Row'

export default class List extends React.Component {

    static navigationOptions = ({navigation}) => {
      return {
          title: `Météo de ${navigation.state.params.city}`,
          tabBarIcon: () => {
            return <Image source={require('./icons/search.jpg')} style={{width: 20, height: 20}}></Image>
         }
      }
    }

    constructor (props){
        super(props);
        console.log('state', this.props.navigation.state.params)
        this.state= {
            city: this.props.navigation.state.params.city,
            report: null
        }
        setTimeout(() => {
            this.fetchWeather()
        }, 1000)
       
    }
        

    fetchWeather () {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&cnt=10&appid=626ad176c3334d0a7e329eb8840fd818`)
        .then((response) =>{
           this.setState({report: response.data})
        })
    }
    
    render() {
        if(this.state.report === null){
            return(
                <ActivityIndicator color={style.color} size="large" />
            )
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
            return (
                <ListView
                dataSource ={ds.cloneWithRows(this.state.report.list)}
                renderRow={(row, j , k) => <WeatherRow  day={row} index={parseInt(k, 10)} />}
                />
            )
        }
    }
}