import { FETCH_ALL_DATA, FILTER_DATA } from "../actions/type";

const initailState = { items: [], filter: [], name: "" };
export default function productReduccer(state = initailState, action) {
  switch (action.type) {
    case FETCH_ALL_DATA:
      // payload it meant when we pass the pay load object in action file
      // payload it meant we can pass the data throght payload next time we creating this object
      return { ...state, items: action.payload, filter: action.payload };
    case FILTER_DATA:
      return {
        ...state,
        // update somedata from items and payload it to new filter
        // it can be the profile detail in here as well
        filter: action.payload.items,
        name: action.payload.name,
      };
    default:
      return state;
  }
}
