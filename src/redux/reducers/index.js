import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const redicers = combineReducers({
  allProduct: productReducer,
});

export default redicers