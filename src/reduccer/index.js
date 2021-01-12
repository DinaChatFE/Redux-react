import { combineReducers } from "redux";
import productReduccer from "./productReduccer";

export default combineReducers({
  //products will be match here
  products: productReduccer,
});
