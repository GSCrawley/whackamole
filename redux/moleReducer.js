import { ADD_MOLE } from './actionTypes'
import { chooseMole, assignMole } from './ChooseMole'
import { useSelector } from 'react-redux'


const mole = 
useSelector(state =>
state.mole
    )

const initalState = {
    mole = chooseMole
}
    
const moleReducer = (state = initalState, action) => {
    switch(action.type) {
        case ADD_MOLE: return {
            ...state,
          mole  : <image src={assignMole}></image>
        }
        default: return state
    }
}


export default moleReducer
