import { combineReducers } from "redux";
import seatReducer from "./seatReducer";

const rootReducer = combineReducers({
  seat: seatReducer,
});

export default rootReducer;
