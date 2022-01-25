import apiStore from "../../apis/apiStore";
// import axios from "axios";
import { ActionTypes } from "../constants/action-types";

 // this middle wear we are applying here
export const fetchProducts =  () => async (dispatch)=>{
    // const response = await axios.get("/products")
    const response = await apiStore.get("/products")
    dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
  // console.log(response)
  // return {
  //   type: ActionTypes.SET_PRODUCTS,
  //   payload: response,
  // };
};

export const fetchProduct =  (id) => async (dispatch)=>{
  const response = await apiStore.get(`/products/${id}`)
  dispatch({type:ActionTypes.SELECTED_PRODUCT,payload:response.data})

};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
