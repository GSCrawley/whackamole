import { ADD_SCORE, ADD_MOLE } from './actionTypes'

const addScore = () => {
    return {
        type: ADD_SCORE
    }
}

const addMole = () => {
    return {
        type: ADD_MOLE
    }
}

export {addScore, addMole}