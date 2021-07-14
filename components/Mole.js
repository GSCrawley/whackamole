import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { Avatar, Button, ThemeProvider } from 'react-native-elements';
import { SwitchScreenNavigator, HomeStackNavigator, GameTabNavigator } from './AppNav'


export default function Mole(props) {
  const Gid = require('../assets/Gid.jpg'),
  const Trump = require('../assets/Donald.jpg'),
  const Mitch = require('../assets/Mitch.jpeg'),
  const Matt = require('../assets/Matt.jpeg'),
  
    return (
        <SafeAreaProvider>
          
          <Avatar 
            size='large'
            rounded
            source={props.imageUri}
              title="GC"
              onPress={() => console.log("Works!")}
              activeOpacity={0.2}
      
                  />

          </SafeAreaProvider>
        );
      }
      
