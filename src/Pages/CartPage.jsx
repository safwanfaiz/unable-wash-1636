import React, { useEffect } from 'react'
import{CartCard} from "../Components/CartCard"
import { useDispatch, useSelector } from 'react-redux';
import { GET_CART_DATA } from '../Redux/App/action';

const CartPage = () => {
  const dispatch = useDispatch();
  const CARTDATA = useSelector((state) => state.AppReducer);
  console.log(CARTDATA,"cartdata")
  useEffect(() => {
   if(CARTDATA.length>=0){
    dispatch(GET_CART_DATA())
    .then((r)=>{
    })
   }}, [CARTDATA.length,dispatch]);
   console.log(CARTDATA,"ll")
  return (
    <>
    <h1>{CARTDATA.length}</h1>
    {CARTDATA?.length>=0 && CARTDATA.map((item)=>
      <CartCard key={item.id} CData={item} />
      )
    }
      
    </>
  )
}

export default CartPage
