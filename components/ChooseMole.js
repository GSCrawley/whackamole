import React, {useEffect, useState, Component } from 'react' 
import { View, Image, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { addMole } from './../redux'
import { connect, mapStateToProps } from 'react-redux'


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
    
  
    });
    
const moles = {
    Gid: {
        source: 
        require('../assets/Gid.jpg'),
        game:
        require('../assets/GinaHole.png')
    },
    Trump: {
        source:
        require('../assets/Donald.jpg'),
        game:
        require('../assets/TrumpInAHole.png')
    },
    Mitch: {
        source:
        require('../assets/Mitch.jpeg'),
        game:
        require('../assets/Mitch.png')
    },
    Matt: {
        source:
        require('../assets/Matt.jpeg'),
        game:
        require('../assets/MattInAHole.png')
    },
    Rudy: {
        source: 
        require('../assets/Rudy.jpeg'),
        game:
        require('../assets/RudyInAHole.png')
    },  
  }

const chooseMole = (props) => {
    return (
      <View style={styles.container}>
        <Image
          source={Gid.source}
        />
        <Image
          source={Trump.source}
        />
        <Image
          source={Mitch.source}
        />
        <Image
          source={Matt.source}
        />
        <Image
          source={Rudy.source}
        />
    </View>
    );
    }

const assignMole = (props) => {
    return (
        <SafeAreaProvider>
            <Avatar>
            size='large'
            rounded
            source={ moles.source }
                onPress={() => navigation.navigate(Square(addMole)),
                activeOpacity='0.2'
            }     
                  </Avatar> 
                  </SafeAreaProvider>
            );
          }

export default connect(mapStateToProps)(ChooseMole)