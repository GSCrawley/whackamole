import { ADD_MOLE } from './actionTypes'
import { moles } from './ChooseMole'


const moleReducer = (state = mole, action) => {
    switch(action.type) {
        case ADD_MOLE: 
            return action.payload.mole
    }
}

export default moleReducer
