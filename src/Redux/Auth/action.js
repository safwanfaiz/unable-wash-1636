import * as types from "./actionType";

const postuserloginrequest = () => {
  return {
    type: types.USER_LOGIN_REQUEST,
  };
};
const postuserloginsucess = () => {
  return {
    type: types.USER_LOGIN_SUCCESS,
  };
};
const postuserloginfailure = () => {
  return {
    type: types.USER_LOGIN_FAILURE,
  };
};
export { postuserloginrequest, postuserloginsucess, postuserloginfailure };
