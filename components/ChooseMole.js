import React, {useEffect, useState, Component } from 'react' 
import { View, Image, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { navigation } from '@react-navigation/native';
import { addMole } from './../redux'
// import { connect, mapStateToProps } from 'react-redux'
import rootReducer from '../redux/rootReducer'


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
      button: {

      }
    
  
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

function ChooseMole() {
    const mole = useSelector(state => state.mole)
    const dispatch = useDispatch()

    return (
        <ImageBackground 
        style={styles.container}
        source={require('../assets/background.png')}
        >
            <H1>{mole}</H1>
        console.log({mole})
        <Text style={styles.header}>Gid's Whackamole Game!</Text>
      `<View style={styles.container}>
        <Image 
          source={Gid.source}>
        <button onClick={() => dispatch(addMole(Gid.game))}>Gideon</button></Image>
        <Image
          source={Trump.source}>
        <button onlick={() => dispatch(addMole(Trump.game))}>Trump</button></Image>
        <Image
          source={Mitch.source}>
        <button onlick={() => dispatch(addMole(Mitch.game))}>McConnel</button></Image>
        <Image
          source={Matt.source}>
        <button onlick={() => dispatch(addMole(Matt.game))}>Gaetz</button></Image>
        <Image
          source={Rudy.source}>
        <button onlick={() => dispatch(addMole(Rudy.game))}>Rudy</button></Image>

    </View>
    </ImageBackground>
    );
    }

export default ChooseMole