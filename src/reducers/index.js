import { combineReducers } from "redux";
import IdiomsReducer from "./reducer_idioms";

const rootReducer = combineReducers({
  idioms: IdiomsReducer,
});

export default rootReducer;
