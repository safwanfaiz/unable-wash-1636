import axios from "axios"
import { ADD_PRODUCT_CART_FAILURE, ADD_PRODUCT_CART_REQUEST, ADD_PRODUCT_CART_SUCCESS, ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_REQUEST_AGAIN,
     ADD_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS_AGAIN, DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_FAILURE_AGAIN, DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_REQUEST_AGAIN, DELETE_PRODUCT_SUCCESS, 
    DELETE_PRODUCT_SUCCESS_AGAIN,  GET_PRODUCTS_FAILURE, 
    GET_PRODUCTS_REQUEST,  GET_PRODUCTS_SUCCESS,
    PATCH_BOOK_FAILURE, 
    PATCH_BOOK_LOADING, PATCH_BOOK_SUCESS } from "./actionTypes"
export const GET_PRODUCT_LOADING_fn=()=>{
    return {type: GET_PRODUCTS_REQUEST}
}
export const GET_PRODUCT_SUCESS_fn=(payload)=>{
    return {type: GET_PRODUCTS_SUCCESS,payload}
}
export const GET_PRODUCT_FAILURE_fn=()=>{
    return {type: GET_PRODUCTS_FAILURE}
}
export const ADD_PRODUCT_REQUESTfn=()=>{
    return {type: ADD_PRODUCT_REQUEST}
}
export const ADD_PRODUCT__SUCESS_fn=(payload)=>{
    return {type: ADD_PRODUCT_SUCCESS,payload}
}
export const ADD_PRODUCT__FAILURE_fn=()=>{
    return {type: ADD_PRODUCT_FAILURE}
}
export const DELETE_PRODUCT_REQUEST_fn=()=>{
    return {type: DELETE_PRODUCT_REQUEST}
}
export const DELETE_PRODUCT__SUCESS_fn=(id)=>{
    return {type: DELETE_PRODUCT_SUCCESS,payload:id}
}
export const DELETE_PRODUCT_FAILURE_fn=()=>{
    return {type: DELETE_PRODUCT_FAILURE}
}
export const ADD_PRODUCT_REQUEST_AGAIN_fn=()=>{
    return {type: ADD_PRODUCT_REQUEST_AGAIN}
}
export const ADD_PRODUCT__SUCESS_AGAIN_fn=(payload)=>{
    return {type: ADD_PRODUCT_SUCCESS_AGAIN,payload}
}
export const ADD_PRODUCT__FAILURE_AGAIN_fn=()=>{
    return {type: ADD_PRODUCT__FAILURE_AGAIN_fn}
}
export const DELETE_PRODUCT_REQUEST_AGAIN_fn=()=>{
    return {type: DELETE_PRODUCT_REQUEST_AGAIN}
}
export const DELETE_PRODUCT__SUCESS_AGAIN_fn=(id)=>{
    return {type: DELETE_PRODUCT_SUCCESS_AGAIN,payload:id}
}
export const DELETE_PRODUCT_FAILURE_AGAIN_fn=()=>{
    return {type: DELETE_PRODUCT_FAILURE_AGAIN}
}
export const ADD_PRODUCT_CART_REQUESTfn = () => {
    return {type: ADD_PRODUCT_CART_REQUEST,};
  };
export const ADD_PRODUCT_CART_SUCESSfn = (payload) => {
    return { type:ADD_PRODUCT_CART_SUCCESS, payload,};
  };
export const ADD_PRODUCT_CART_FAILUREfn = () => {
    return {type:ADD_PRODUCT_CART_FAILURE,};
  };

// Get Products at COMPANY-------------------------------------------------------------------------------->
export const GET_PRODUCTS =(params) =>(dispatch)=>{
    console.log(params,"pars-now")
    dispatch(GET_PRODUCT_LOADING_fn())
   return axios.get("COMPANY-LINK",params)
    .then((r)=> {dispatch(GET_PRODUCT_SUCESS_fn(r.data))})
    .catch((e)=>{GET_PRODUCT_FAILURE_fn(e)})
}
// Add data to COMPANY------------------------------------------------------------------------------------>
export const ADD_DATA=(payload)=>(dispatch)=>{
    dispatch(ADD_PRODUCT_REQUESTfn)
   return axios.post("COMPANY-LINK",payload)
    .then((r)=>{ 
      dispatch(ADD_PRODUCT__SUCESS_fn(r.data))
      dispatch(GET_PRODUCTS())
    })
 .catch((e)=>{ADD_PRODUCT__FAILURE_fn(e)})
}
// Add data to  STUDENTSs----------------------------------------------------------------------------->
export const ADD_DATA_COMPANY=(payload)=>(dispatch)=>{
    dispatch(ADD_PRODUCT_REQUEST_AGAIN_fn)
   return axios.post("STUDENTS-LINK",payload)
    .then((r)=>{ 
      dispatch(ADD_PRODUCT__SUCESS_AGAIN_fn(r.data))
      dispatch(GET_PRODUCTS())
    })
 .catch((e)=>{ADD_PRODUCT__FAILURE_AGAIN_fn(e)})
}
// Delete Data from COMPANY--------------------------------------------------------------------------------->
export const DELETE_DATA=(id)=>(dispatch)=>{
    dispatch(DELETE_PRODUCT_REQUEST_fn)
   return axios.delete(`COMPANY-LINK/${id}`)
    .then((r)=>{ 
      dispatch(DELETE_PRODUCT__SUCESS_fn())
      dispatch(GET_PRODUCTS())
    }).catch((e)=>{DELETE_PRODUCT_FAILURE_fn(e)})
}
// Delete Data at STUDENTS------------------------------------------------------------------------->
export const DELETE_DATA_COMPANY=(id)=>(dispatch)=>{
    dispatch(DELETE_PRODUCT_REQUEST_AGAIN_fn)
   return axios.delete(`STUDENTS-LINK/${id}`)
    .then((r)=>{ 
      dispatch(DELETE_PRODUCT__SUCESS_AGAIN_fn())
      dispatch(GET_PRODUCTS())
    }).catch((e)=>{DELETE_PRODUCT_FAILURE_AGAIN_fn(e)})
}
// Edit data from COMPANY ----------------------------------------------------------------------------------->
export const EDIT_DATA =(id,payload) =>(dispatch)=>{
    dispatch({type:PATCH_BOOK_LOADING})
   return axios.patch(`COMPANY-LINK/${id}`,payload)
    .then((r)=>  ({type:PATCH_BOOK_SUCESS,payload:r.data}))
    .catch((e)=>({type:PATCH_BOOK_FAILURE,e}))
    
}
// Edit data at STUDENTS---------------------------------------------------------------------------->
export const EDIT_DATA_AGAIN =(id,payload) =>(dispatch)=>{
    dispatch({type:PATCH_BOOK_LOADING})
   return axios.patch(`STUDENTS-LINK/${id}`,payload)
    .then((r)=>  ({type:PATCH_BOOK_SUCESS,payload:r.data}))
    .catch((e)=>({type:PATCH_BOOK_FAILURE,e}))
}

