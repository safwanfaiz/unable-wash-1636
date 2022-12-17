import React from "react";
import * as types from "./actionType";
const initial = {
  isAuth: false,
  isAuthLoading: false,
  isAuthError: false,
};
export const reducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isAuthLoading: true,
      };
    case types.USER_LOGIN_SUCCESS:
      console.log("action:", state);
      // localStorage.setItem("auth",JSON.stringify())
      return {
        ...state,
        isAuthLoading: false,
        isAuth: true,
      };
    

    default:
      return state;
  }
};
