import axios from "axios";
import { SET_LOADING, SET_ERROR, FECTH_PRODUCTS } from "./actionType";
const url = "https://ecommerce-01-ignaway.herokuapp.com";

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const data = await axios(`${url}/products`);
      dispatch(setLoading(false));
      dispatch(setFetchProducts(data.data));
    } catch (error) {
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  };
}

export function addProduct(product) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await axios.post(`${url}/products`, product);
      dispatch(setLoading(false));
      dispatch(fetchProducts());
    } catch (error) {
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  };
}

export function deleteProduct(id) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await axios.delete(`${url}/products/${id}`);
      dispatch(setLoading(false));
      dispatch(fetchProducts());
    } catch (error) {
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  };
}

export function FetchEditProduct(id, product) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await axios.put(`${url}/products/${id}`, product);
      dispatch(setLoading(false));
      dispatch(fetchProducts());
    } catch (error) {
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  };
}

export function FetchProductsById(id) {
  return function (dispatch) {
    dispatch(setLoading(true));
    return fetch(`${url}/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) throw new Error("something went wrong!");
      else return res.json();
    });
  };
}

export function setFetchProducts(payload) {
  return {
    type: FECTH_PRODUCTS,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload,
  };
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload,
  };
}
