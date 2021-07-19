import { createStore } from 'redux'

const store = createStore(scoreReducer, moleReducer)

export default store