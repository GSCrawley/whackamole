import { createStore } from 'redux'
import scoreReducer from './scoreReducer'
import moleReducer from './moleReducer.js'

const store = createStore(scoreReducer, moleReducer)

export default store