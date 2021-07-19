export const ADD_SCORE = 'ADD_SCORE'

export const ADD_MOLE = 'ADD_MOLE'

export const addMole = (mole) => {
    return {
        type: ADD_MOLE,
        payload: { mole }
    }
}
