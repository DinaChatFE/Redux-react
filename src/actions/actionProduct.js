import { FETCH_ALL_DATA, FILTER_DATA } from "./type";
import { data } from "../data/data";

export const fetchProducts = () => dispatch => {
  dispatch({ type: FETCH_ALL_DATA, payload: data });
};
export const filterProducts = (products, name) => dispatch => {
  dispatch({
    type: FILTER_DATA,
    payload: {
      name: name,
      items:
        name === ""
          ? products
          : products.filter(productsname => productsname.name === name),
    },
  });
};
