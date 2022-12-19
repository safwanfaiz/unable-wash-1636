import * as types from "./actionTypes";
import {GET_CART_DATA_FAILURE,
  GET_CART_DATA_REQUEST,
  GET_CART_DATA_SUCCESS,
  GET_COURSE_DATA_FAILURE,
  GET_COURSE_DATA_REQUEST,
  GET_COURSE_DATA_SUCCESS,
  POST_ADDTOCART_FAILURE,
  POST_ADDTOCART_REQUEST,
  POST_ADDTOCART_SUCCESS} from "../App/actionTypes"
const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    cart: [],
    courseData: [],
  searchData: [],
  cartData: [],
  applyData: {},
  
  };
  
  export const reducer = (state = initialState,action) => {
    
    switch (action.type) {
      case types.GET_PRODUCTS_REQUEST:
         {
        return { ...state, isLoading: true, isError: false };
      }
      case types.GET_PRODUCTS_SUCCESS: {
        return { ...state, isLoading: false, products: action.payload, isError: false };
      }
      case types.GET_PRODUCTS_FAILURE:{
        return { ...state, isLoading: false, isError: true };
      }
      case types.ADD_PRODUCT_REQUEST: 
        case types.ADD_PRODUCT_REQUEST_AGAIN:
            case types.ADD_CART_REQUEST: {
        return { ...state, isLoading: true, isError: false };
      }
  
      case types.ADD_PRODUCT_SUCCESS: 
      case types.ADD_PRODUCT_SUCCESS_AGAIN:{
        return { ...state, isLoading: false, isError: false, products: action.payload };
      }
      case types.ADD_CART_SUCCESS:{
        return { ...state, isLoading: false, isError: false, cart: action.payload };
      }  
      case types.ADD_PRODUCT_FAILURE: 
        case types.ADD_PRODUCT_FAILURE_AGAIN:
            case types.ADD_CART_FAILURE:{
        return { ...state, isLoading: false, isError: true };
      }
  
      case types.DELETE_PRODUCT_REQUEST: 
        case types.DELETE_PRODUCT_REQUEST_AGAIN:
            case types.DELETE_CART_REQUEST: {
        return { isLoading: true, isError: false };
      }
  
      case types.DELETE_PRODUCT_SUCCESS:  
        case types.DELETE_PRODUCT_SUCCESS_AGAIN:{
        return { ...state, isLoading: false, basket: action.payload, isError: false };
      }
      case types.DELETE_CART_SUCCESS:{
        return { ...state, isLoading: false, cart: action.payload, isError: false };
      }
      case types.DELETE_PRODUCT_FAILURE: 
        case types.DELETE_PRODUCT_FAILURE_AGAIN:
            case types.DELETE_CART_FAILURE:  {
             return { isLoading: false, isError: true };
      }


      case GET_COURSE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case GET_COURSE_DATA_SUCCESS:
      return { ...state, isLoading: false, courseData: action.payload };
    case GET_COURSE_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case POST_ADDTOCART_REQUEST:
      return { ...state, isLoading: false };
    case POST_ADDTOCART_SUCCESS:
      return { ...state, isLoading: true };
    case POST_ADDTOCART_FAILURE:
      return { ...state, isLoading: false, isError: true };
      
    case types.GET_CART_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_CART_SUCCESS:
      return { ...state, isLoading: false, cart: action.payload };
    case types.GET_CART_FAILURE:
      return { ...state, isLoading: false, isError: true };


      default:
        return state;
    }
  };