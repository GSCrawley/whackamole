import React, {useEffect, useState, Component } from 'react' 
import { StyleSheet, Text, View,  Image, ImageBackground  } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Avatar, Button, ThemeProvider } from 'react-native-elements';
import { SwitchScreenNavigator, HomeStackNavigator, GameTabNavigator } from './AppNav'
import { useNavigation } from '@react-navigation/native';
import { moleReducer } from '../redux/moleReducer';
import Square  from './Square.'


const playMole = (props) => {
  Mole.Gid = require('../assets/GinaHole.png'),
  Mole.Trump = require('../assets/TrumpInAHole.png'),
  Mole.Mitch = require('../assets/Mitch.png'),
  Mole.Matt = require('../assets/MattInAHole.png'),
  Mole.Rudy = require('../assets/RudyInAHole.png')
}

const MoleScreen = (navigate) => {
  const navigation = useNavigation();
  const Mole = (props) => {
    return (
        <SafeAreaProvider>
          
          <Avatar>
            size='large'
            rounded
            source={ moles.props }
              onPress={() => navigation.navigate(Square(playMole)),
              activeOpacity='0.2'
            }     
              </Avatar> 
              </SafeAreaProvider>
        );
      }
      
    return <ImageBackground 
    style={styles.container}
    source={require('../assets/background.png')}
    >
    <Text style={styles.header}>Choose your mole!</Text>
    <View style={styles.game}>
    <Mole.Gid />
    <Mole.Trump />

    </View>
      </ImageBackground>
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    game: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 300,
      paddingTop: 20
    },
    header: {
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 100,
        color: 'purple'

    }
})

export default { MoleScreen, Mole }