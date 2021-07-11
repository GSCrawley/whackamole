import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'


const Square = (props) => {
    const [moleActive, setMoleActive] = useState(false)
    const [isGameOver, setGameOver] = useState(false)

    const randomTime = Math.random() * 20000
    let timerId

    useEffect(() => {
        const timerId = setInterval(() => {
            setMoleActive(true)
            setTimeout(() => {setMoleActive(false)},800)
        }, randomTime)
        setTimeout(endGame, 20 * 1000)
    }, [])
    
    function endGame() {
        clearInterval(timerId)
        setGameOver(true)
    }
    return (
        <View style={moleActive? styles.mole : styles.square}>
            {isGameOver && <Text style={{fontSize:40, justifyContent:'space-around'}}> X </Text>}
            </View>
    )
}

const styles = StyleSheet.create({
    square: {
        flex: 1,
        minWidth: 80,
        minHeight: 80,
        margin: 10, 
        backgroundColor: 'violet',
    },
    mole: {
        flex: 1,
        minWidth: 80,
        minHeight: 80,
        margin: 10, 
        backgroundColor: 'yellow',
    }
})

const mapStateToProps = state => {
    return {
        score: state.score
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addScore: () => dispatch(addScore())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)