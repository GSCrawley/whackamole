import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { Avatar, Button, ThemeProvider } from 'react-native-elements';
import { SwitchScreenNavigator, HomeStackNavigator, GameTabNavigator } from './AppNav'


const moles = {
  gid: require('../assets/Gid.jpg'),
  trump: require('../assets/Donald.jpg'),
  mitch:  require('../assets/Mitch.jpeg'),
  matt: require('../assets/Matt.jpeg')
}

  
export default function Mole(props) {
    return (
        <SafeAreaProvider>
          
          <Avatar 
            size='large'
            rounded
            source={ props.moles }
              title="GC"
              onPress={() => console.log("Works!")}
              activeOpacity={0.2}
      
                  />

          </SafeAreaProvider>
        );
      }
      
