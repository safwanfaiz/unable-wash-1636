import React, { useEffect } from 'react'
import{CartCard} from "../Components/CartCard"
import { useDispatch, useSelector } from 'react-redux';
import { GET_CART_DATA } from '../Redux/App/action';
import UseCart from '../Hooks/UseCart';

const CartPage = () => {
  const dispatch = useDispatch();
  const CARTDATA = useSelector((state) => state.AppReducer.cart);
  useEffect(() => {
   if(CARTDATA.length===0){
    dispatch(GET_CART_DATA())
   }}, []);
  return (
    <>
    <h1>{CARTDATA.length}</h1>
    {CARTDATA.length>=0 && CARTDATA.map((item)=>
      <CartCard key={item.id} CData={item} />
      )
    }
      
    </>
  )
}

export default CartPage
