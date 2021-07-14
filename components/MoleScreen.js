import React, {useEffect, useState} from 'react' 
import { StyleSheet, Text, View, ImageBackground  } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import Mole from './components/Mole.js'
import { Avatar } from 'react-native-elements';
import { SwitchScreenNavigator, HomeStackNavigator, GameTabNavigator } from './AppNav'


const MoleScreen = (navigation) => {


    return <ImageBackground 
    style={styles.container}
    source={require('../assets/background.png')}
    >
    <Text style={styles.header}>Choose your mole!</Text>
    <View style={styles.game}>
    <Mole />
    <Mole />

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

export default MoleScreen