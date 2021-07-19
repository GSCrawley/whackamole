import { ADD_MOLE } from './actionTypes'

const moleReducer = (state = null, action) => {
    switch(action.type) {
        case ADD_MOLE: 
            return action.payload.mole
    }
}

export default moleReducer
