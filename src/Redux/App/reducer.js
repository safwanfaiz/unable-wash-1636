import * as types from "./actionTypes";
const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    cart: [],
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case types.GET_PRODUCTS_REQUEST:
         {
        return { ...state, isLoading: true, isError: false };
      }
      case types.GET_PRODUCTS_SUCCESS: {
        return { ...state, isLoading: false, products: payload, isError: false };
      }
      case types.GET_PRODUCTS_FAILURE:{
        return { ...state, isLoading: false, isError: true };
      }
      case types.ADD_PRODUCT_REQUEST: 
        case types.ADD_PRODUCT_REQUEST_AGAIN:
            case types.ADD_PRODUCT_CART_REQUEST: {
        return { ...state, isLoading: true, isError: false };
      }
  
      case types.ADD_PRODUCT_SUCCESS: 
      case types.ADD_PRODUCT_SUCCESS_AGAIN:{
        return { ...state, isLoading: true, isError: false, products: payload };
      }
      case types.ADD_PRODUCT_CART_SUCCESS:{
        return { ...state, isLoading: true, isError: false, cart: payload };
      }  
      case types.ADD_PRODUCT_FAILURE: 
        case types.ADD_PRODUCT_FAILURE_AGAIN:
            case types.ADD_PRODUCT_CART_FAILURE:{
        return { ...state, isLoading: false, isError: true };
      }
  
      case types.DELETE_PRODUCT_REQUEST: 
        case types.DELETE_PRODUCT_REQUEST_AGAIN:
            case types.DELETE_PRODUCT_CART_REQUEST: {
        return { isLoading: true, isError: false };
      }
  
      case types.DELETE_PRODUCT_SUCCESS:  
        case types.DELETE_PRODUCT_SUCCESS_AGAIN:{
        return { ...state, isLoading: false, basket: payload, isError: false };
      }
      case types.DELETE_PRODUCT_CART_SUCCESS:{
        return { ...state, isLoading: false, cart: payload, isError: false };
      }
      case types.DELETE_PRODUCT_FAILURE: 
        case types.DELETE_PRODUCT_FAILURE_AGAIN:
            case types.DELETE_PRODUCT_CART_FAILURE:  {
             return { isLoading: false, isError: true };
      }
  
      default:
        return state;
    }
  };