import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_CART_DATA } from '../Redux/App/action';

const UseCart = () => {
    const dispatch = useDispatch();
    const CARTDATA = useSelector((state) => state.AppReducer.cart);
    useEffect(() => {
     if(CARTDATA.length===0){
      dispatch(GET_CART_DATA())
     }}, []);
  return {
    CARTDATA
  }
}

export default UseCart
