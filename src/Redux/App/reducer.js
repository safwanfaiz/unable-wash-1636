import {
  GET_CART_DATA_FAILURE,
  GET_CART_DATA_REQUEST,
  GET_CART_DATA_SUCCESS,
  GET_COURSE_DATA_FAILURE,
  GET_COURSE_DATA_REQUEST,
  GET_COURSE_DATA_SUCCESS,
  POST_ADDTOCART_FAILURE,
  POST_ADDTOCART_REQUEST,
  POST_ADDTOCART_SUCCESS,
  SEARCH_DATA_FAILURE,
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_SUCCESS,
  GET_APPLY_DATA_FAILURE,
  GET_APPLY_DATA_REQUEST,
  GET_APPLY_DATA_SUCCESS,
  DELETE_DETAILS_REQUEST,
  DELETE_DETAILS_SUCCESS,
  DELETE_DETAILS_FAILURE,
} from "./actionTypes";

const initialState = {
  courseData: [],
  searchData: [],
  cartData: [],
  applyData: {},
  isLoading: false,
  isError: false,
};
export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_DATA_REQUEST:
      return { ...oldState, isLoading: true };
    case SEARCH_DATA_SUCCESS:
      return { ...oldState, isLoading: false, searchData: payload };
    case SEARCH_DATA_FAILURE:
      return { ...oldState, isLoading: false, isError: true };

    case GET_COURSE_DATA_REQUEST:
      return { ...oldState, isLoading: true };
    case GET_COURSE_DATA_SUCCESS:
      return { ...oldState, isLoading: false, courseData: payload };
    case GET_COURSE_DATA_FAILURE:
      return { ...oldState, isLoading: false, isError: true };
    case POST_ADDTOCART_REQUEST:
      return { ...oldState, isLoading: false };
    case POST_ADDTOCART_SUCCESS:
      return { ...oldState, isLoading: true };
    case POST_ADDTOCART_FAILURE:
      return { ...oldState, isLoading: false, isError: true };
    case GET_CART_DATA_REQUEST:
      return { ...oldState, isLoading: true };
    case GET_CART_DATA_SUCCESS:
      return { ...oldState, isLoading: false, cartData: payload };
    case GET_CART_DATA_FAILURE:
      return { ...oldState, isLoading: false, isError: true };
    case GET_APPLY_DATA_REQUEST:
      return { ...oldState, isLoading: true };
    case GET_APPLY_DATA_SUCCESS:
      return { ...oldState, isLoading: false, applyData: payload };
    case GET_APPLY_DATA_FAILURE:
      return { ...oldState, isLoading: false, isError: true };
    case DELETE_DETAILS_REQUEST:
      return { ...oldState, isLoading: true };
    case DELETE_DETAILS_SUCCESS:
      return { ...oldState, isLoading: false };
    case DELETE_DETAILS_FAILURE:
      return { ...oldState, isLoading: false, isError: true };

    default:
      return oldState;
  }
};
