import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'


const Square = () => {
    const [moleActive, setMoleActive] = useState(false)
    const [isGameOver, setGameOver] = useState(false)

    const randomTime = Math.random() * 20000
    let timerId

    useEffect(() => {
        const timerId = setInterval(() => {
            setMoleActive(true)
            setTimeout(() => {setMoleActive(false)},800)
        }, randomTime)
        setTimeout(endGame, 30 * 1000)
    }, [])
    
    function endGame() {
        clearInterval(timerId)
        setGameOver(true)
    }
    return (
        <View style={moleActive? styles.mole : styles.square}>
            {isGameOver && <Text>'X'</Text>}
            </View>
    )
}

const styles = StyleSheet.create({
    square: {
        flex: 1,
        minWidth: 80,
        minHeight: 80,
        margin: 10, 
        backgroundColor: 'red',
    },
    mole: {
        flex: 1,
        minWidth: 80,
        minHeight: 80,
        margin: 10, 
        backgroundColor: 'blue',
    }
})

export default Square