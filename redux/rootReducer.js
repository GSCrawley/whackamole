import { combineReducers } from "redux";
import scoreReducer from "./scoreReducer";
import moleReducer from "./moleReducer";

const rootReducer = combineReducers({
    score: scoreReducer,
    mole: moleReducer
})

export default rootReducer