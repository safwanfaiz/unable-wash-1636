
import axios from "axios";
import { 
    ADD_CART_FAILURE, ADD_CART_REQUEST, ADD_CART_SUCCESS, ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_REQUEST_AGAIN, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS_AGAIN, DELETE_ALL_CART_DATA_FAILURE, DELETE_ALL_CART_DATA_REQUEST, DELETE_ALL_CART_DATA_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_FAILURE_AGAIN, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST_AGAIN, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS_AGAIN, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, PATCH_BOOK_FAILURE, PATCH_BOOK_LOADING, PATCH_BOOK_SUCESS } from "./actionTypes"
// GET STDUENT COURSE URL-------------------------------------------------------------------------------->
    export const GET_PRODUCT_LOADING_fn=()=>{
        return {type: GET_PRODUCTS_REQUEST}
    }
    export const GET_PRODUCT_SUCESS_fn=(payload)=>{
        return {type: GET_PRODUCTS_SUCCESS,payload}
    }
    export const GET_PRODUCT_FAILURE_fn=()=>{
        return {type: GET_PRODUCTS_FAILURE}
    }
    // export const GET_PRODUCT_SEARCH_BAR_LOADING_fn=()=>{
    //     return {type: GET_PRODUCTS_REQUEST}
    // }
// ADD DATA TO COMPANY URL-------------------------------------------------------------------------------->
    export const ADD_PRODUCT_REQUESTfn=()=>{
        return {type: ADD_PRODUCT_REQUEST}
    }
    export const ADD_PRODUCT__SUCESS_fn=(payload)=>{
        return {type: ADD_PRODUCT_SUCCESS,payload}
    }
    export const ADD_PRODUCT__FAILURE_fn=()=>{
        return {type: ADD_PRODUCT_FAILURE}
    }
//DELETE DATA FROM COMPANY URL-------------------------------------------------------------------------------->
    export const DELETE_PRODUCT_REQUEST_fn=()=>{
        return {type: DELETE_PRODUCT_REQUEST}
    }
    export const DELETE_PRODUCT__SUCESS_fn=(id)=>{
        return {type: DELETE_PRODUCT_SUCCESS,payload:id}
    }
    export const DELETE_PRODUCT_FAILURE_fn=()=>{
        return {type: DELETE_PRODUCT_FAILURE}
    }
// ADD DATA TO STUDENT URL-------------------------------------------------------------------------------->
    export const ADD_PRODUCT_REQUEST_AGAIN_fn=()=>{
        return {type: ADD_PRODUCT_REQUEST_AGAIN}
    }
    export const ADD_PRODUCT__SUCESS_AGAIN_fn=(payload)=>{
        return {type: ADD_PRODUCT_SUCCESS_AGAIN,payload}
    }
    export const ADD_PRODUCT__FAILURE_AGAIN_fn=()=>{
        return {type: ADD_PRODUCT__FAILURE_AGAIN_fn}
    }
// DELETE DATA FROM STUDENT URL-------------------------------------------------------------------------------->
    export const DELETE_PRODUCT_REQUEST_AGAIN_fn=()=>{
        return {type: DELETE_PRODUCT_REQUEST_AGAIN}
    }
    export const DELETE_PRODUCT__SUCESS_AGAIN_fn=(id)=>{
        return {type: DELETE_PRODUCT_SUCCESS_AGAIN,payload:id}
    }
    export const DELETE_PRODUCT_FAILURE_AGAIN_fn=()=>{
        return {type: DELETE_PRODUCT_FAILURE_AGAIN}
    }

// GET CART DATA FROM CART URL-------------------------------------------------------------------------------->
    export const GET_CART_LOADING_fn=()=>{
        return {type: GET_CART_REQUEST}
    }
    export const GET_CART_SUCESS_fn=(payload)=>{
        return {type: GET_CART_SUCCESS,payload}
    }
    export const GET_CART_FAILURE_fn=()=>{
        return {type: GET_CART_FAILURE}
    }
    // GET COMPANY DATA FROM CART URL-------------------------------------------------------------------------------->
    export const GET_COMPANY_LOADING_fn=()=>{
        return {type: GET_CART_REQUEST}
    }
    export const GET_COMPANY_SUCESS_fn=(payload)=>{
        return {type: GET_CART_SUCCESS,payload}
    }
    export const GET_COMPANY_FAILURE_fn=()=>{
        return {type: GET_CART_FAILURE}
    }
// ADD DATA TO THE CART URL-------------------------------------------------------------------------------->
    export const ADD_CART_REQUESTfn=()=>{
        return {type: ADD_CART_REQUEST}
    }
    export const ADD_CART_SUCESS_fn=(payload)=>{
        return {type: ADD_CART_SUCCESS,payload}
    }
    export const ADD_CART_FAILURE_fn=()=>{
        return {type: ADD_CART_FAILURE}
    }



// CART ALL DATA DELETE FROM URL-------------------------------------------------------------------------------->
    export const DELETE_ALL_CART_REQUEST_fn=()=>{
        return {type: DELETE_ALL_CART_DATA_REQUEST}
    }
    export const DELETE_ALL_CART_SUCESS_fn=(id)=>{
        return {type: DELETE_ALL_CART_DATA_SUCCESS,payload:id}
    }
    export const DELETE_ALL_CART_FAILURE_fn=()=>{
        return {type: DELETE_ALL_CART_DATA_FAILURE}
    }
// Get Products at Admin COURSE-------------------------------------------------------------------------------->
export const GET_PRODUCTS_COMPANY =() =>(dispatch)=>{
    dispatch(GET_PRODUCT_LOADING_fn())
   return axios.get("https://bustling-gleaming-office.glitch.me/studentcourses")
    .then((r)=> {dispatch(GET_PRODUCT_SUCESS_fn(r.data))})
    .catch((e)=>{GET_PRODUCT_FAILURE_fn(e)})
}
// Get Products at STUDENTS COURSE-------------------------------------------------------------------------------->
    export const GET_PRODUCTS_COMPANY_ADMIN =() =>(dispatch)=>{
        dispatch(GET_COMPANY_LOADING_fn())
       return axios.get("https://bustling-gleaming-office.glitch.me/companycourses")
        .then((r)=> {dispatch(GET_COMPANY_SUCESS_fn(r.data))})
        .catch((e)=>{GET_COMPANY_FAILURE_fn(e)})
    }
// Add data to Admin course ------------------------------------------------------------------------------------>
    export const ADD_DATA_COMPANY_COURSE=(payload)=>(dispatch)=>{
        dispatch(ADD_PRODUCT_REQUESTfn())
       return axios.post(`https://bustling-gleaming-office.glitch.me/companycourses`,payload)
        .then((r)=>{ 
          dispatch(ADD_PRODUCT__SUCESS_fn(r.data))
          dispatch(GET_PRODUCTS_COMPANY())
          dispatch(GET_PRODUCTS_COMPANY_ADMIN())
        })
     .catch((e)=>{ADD_PRODUCT__FAILURE_fn(e)})
    }
// Add data to Students site course----------------------------------------------------------------------------->
    export const ADD_DATA_STUDENT_COURSE=(payload)=>(dispatch)=>{
        dispatch(ADD_PRODUCT_REQUEST_AGAIN_fn)
       return axios.post("https://bustling-gleaming-office.glitch.me/studentcourses",payload)
        .then((r)=>{ 
        //   dispatch(ADD_PRODUCT__SUCESS_AGAIN_fn(r.data))
          dispatch(GET_PRODUCTS_COMPANY())
          dispatch(GET_PRODUCTS_COMPANY_ADMIN())
        })
        .catch((e)=>{ADD_PRODUCT__FAILURE_AGAIN_fn(e)})
    }
// Delete Data from Admin course--------------------------------------------------------------------------------->
    export const DELETE_DATA_COMPANY_COURSE=(id)=>(dispatch)=>{
        dispatch(DELETE_PRODUCT_REQUEST_fn)
       return axios.delete(`https://bustling-gleaming-office.glitch.me/companycourse/${id}`)
        .then((r)=>{ 
          dispatch(DELETE_PRODUCT__SUCESS_fn())
          dispatch(GET_PRODUCTS_COMPANY())
          dispatch(GET_PRODUCTS_COMPANY_ADMIN())
        }).catch((e)=>{DELETE_PRODUCT_FAILURE_fn(e)})
    }
// Delete Data from Students site course------------------------------------------------------------------------->
    export const DELETE_DATA_STUDENT_COURSE=(id)=>(dispatch)=>{
        dispatch(DELETE_PRODUCT_REQUEST_AGAIN_fn)
       return axios.delete(`https://bustling-gleaming-office.glitch.me/studentcourses/${id}`)
        .then((r)=>{ 
        //   dispatch(DELETE_PRODUCT__SUCESS_AGAIN_fn())
          dispatch(GET_PRODUCTS_COMPANY())
        }).catch((e)=>{DELETE_PRODUCT_FAILURE_AGAIN_fn(e)})
    }
// Edit data from Admin ----------------------------------------------------------------------------------->
    export const EDIT_DATA_COMPANY_COURSE =(id,payload) =>(dispatch)=>{
        dispatch({type:PATCH_BOOK_LOADING})
       return axios.patch(`https://bustling-gleaming-office.glitch.me/companycourse/${id}`,payload)
        .then((r)=>  ({type:PATCH_BOOK_SUCESS,payload:r.data}))
        .catch((e)=>({type:PATCH_BOOK_FAILURE,e}))
        
    }
// Edit data from STUDENT ---------------------------------------------------------------------------->
    export const EDIT_DATA__STUDENT_COURSE =(id,payload) =>(dispatch)=>{
        dispatch({type:PATCH_BOOK_LOADING})
       return axios.patch(`https://bustling-gleaming-office.glitch.me/studentcourses/${id}`,payload)
        .then((r)=>  ({type:PATCH_BOOK_SUCESS,payload:r.data}))
        .catch((e)=>({type:PATCH_BOOK_FAILURE,e}))
    }
// GET CART DATA FROM STORE & CART URL-------------------------------------------------------------------------------->
    export const GET_CART_DATA=()=>(dispatch)=>{
        dispatch(GET_CART_LOADING_fn())
       return axios.get("https://bustling-gleaming-office.glitch.me/cart")
        .then((r)=> {dispatch(GET_CART_SUCESS_fn(r.data))})
        .catch((e)=>{GET_CART_FAILURE_fn(e)})
    }
// ADD DATA TO CART URL AND STORE -------------------------------------------------------------------------------->
    export const ADD_DATA_TO_CART = (payload) => (dispatch) => {
        dispatch(ADD_CART_REQUESTfn());
        return axios
          .post("https://bustling-gleaming-office.glitch.me/cart", payload)
          .then((r) => {
            dispatch(ADD_CART_SUCESS_fn(r.data));
            dispatch(GET_CART_DATA())
          })
          .catch((e) => {
            dispatch(ADD_CART_FAILURE_fn(e));
          });
      };
// REMOVE DATA FROM CART URL AND CART STORE URL-------------------------------------------------------------------------------->     
      export const REMOVE_DATA_FROM_CART = (id) => (dispatch) => {
        console.log(id)
        dispatch(ADD_CART_REQUESTfn());
        return axios
          .delete(`https://bustling-gleaming-office.glitch.me/cart/${id}`)
          .then((res) => {
            dispatch(GET_CART_DATA());
          })
          .catch((e) => {
            dispatch(ADD_CART_FAILURE_fn(e));
          });
      };
      
// REMOVE ALL DATA FROM CART URL AND CART STORE URL-------------------------------------------------------------------------------->     
export const REMOVE_ALL_DATA_FROM_CART = (CARTDATA) => (dispatch) => {
    CARTDATA.forEach((p) => {
 console.log(p.id,"array")
    dispatch( DELETE_ALL_CART_REQUEST_fn());
    return axios
      .delete(`https://bustling-gleaming-office.glitch.me/cart/${p.id}`)
      .then((res) => {
        dispatch( DELETE_ALL_CART_SUCESS_fn());
        dispatch(GET_CART_DATA());
      })
      .catch((e) => {
        dispatch(DELETE_ALL_CART_FAILURE_fn(e));

      });
    });
  };
  
    // Get Products at NAvBAR Search------------------------------------------------------------------------>
    // export const GET_PRODUCT_SEARCH =(params) =>(dispatch)=>{
    //     dispatch(GET_PRODUCT_SEARCH_BAR_LOADING_fn())
    //    return axios.get("https://jewel-sneaky-dingo.glitch.me/watchPremiers",params)
    //     .then((r)=> {dispatch(GET_PRODUCT_SEARCH_BAR_SUCESS_fn(r.data))})
    //     .catch((e)=>{(GET_PRODUCT_SEARCH_BAR_FAILURE_fn())})
    // }
//SHAIK------------------------------------------------------------->
        // export const GET_PRODUCT_SEARCH_BAR_SUCESS_fn=(payload)=>{
    //     return {type: GET_PRODUCTS_SUCCESS_SEARCHBAR,payload}
    // }
    // export const GET_PRODUCT_SEARCH_BAR_FAILURE_fn=()=>{
    //     return {type: GET_PRODUCTS_FAILURE_SEARCHBAR}
    // }