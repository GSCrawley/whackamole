import { ADD_MOLE } from './actionTypes'

const initialState = {
    : 0
}

const moleReducer = (state, action) => {
    switch(action.type) {
        case ADD_MOLE: return {
            ...state,
            : state.score + 1
        }
        default: return state
    }
}

export default moleReducer
