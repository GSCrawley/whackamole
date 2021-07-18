import React, {useEffect, useState, Component } from 'react' 
import { View, Image, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      grid: {
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
      },
      avatar: {

      }
  
    });
    2
const moles = (props) => {
    Gid = moles.gid = require('../assets/Gid.jpg'),
    Trump = moles.trump = require('../assets/Donald.jpg'),
    Mitch = moles.mitch = require('../assets/Mitch.jpeg'),
    Matt = moles.matt = require('../assets/Matt.jpeg'),
    Rudy = moles.rudy = require('../assets/Rudy.jpeg')
  }

const Moles = (props) => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={require({Gid})}
        />
        <Image
          style={styles.avatar}
          source={require({Trump})}
        />
        <Image
          style={styles.avatar}
          source={require({Mitch})}
        />
        <Image
          style={styles.avatar}
          source={require({Matt})}
        />
        <Image
          style={styles.avatar}
          source={require({Rudy})}
        />
    
    </View>
    );
    }

    const chooseMoles = () => {
        return (
            <SafeAreaProvider>
              <Avatar>
                size='large'
                rounded
                source={ Moles.props }
                  onPress={() => navigation.navigate(Square(playMole)),
                  activeOpacity='0.2'
                }     
                  </Avatar> 
                  </SafeAreaProvider>
            );
          }
    }