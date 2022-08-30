import { combineReducers } from "redux";
import scoreReducer from "./scoreReducer";
import moleReducer from "./moleReducer";

const rootReducer = combineReducers({
    score: scoreReducer,
    mole: moleReducer,
    nav: (state=(mole,score), action) => {
return state;
    }
})

export default rootReducer