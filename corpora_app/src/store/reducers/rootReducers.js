import { FECTH_PRODUCTS, SET_LOADING, SET_ERROR } from "../actions/actionType";

const initialState = {
  products: null,
  isLoading: true,
  isError: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
      
    case FECTH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
}
