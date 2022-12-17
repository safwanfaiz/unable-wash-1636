import { Button, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { GET_AUTH_FAILURE_fn, GET_AUTH_SUCESS_fn } from '../Redux/Auth/action';
import { UserAuth } from '../Utils/firebase-config';

export const HomePage = () => {
  const [displayName,setDisplayName]=useState('');
  const [avatar,setAvatar] =useState(false);
  const [userEmail,setUserEmail]=useState('')
  const[userPhoto,setUserPhoto]=useState('')
  const [userToken,setUserToken]=useState('')
  const[useruid,setUseruid]=useState('')
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const usersc = useSelector((state)=>state.Auth)
  console.log(usersc,"usersc")
  const HandleLogOut =()=>{
    signOut(UserAuth).then(() => {
    toast.success("Logout Sucessfull")
    navigate("/")
  }).catch((error) => {
    toast.error(error.massege)
  })};
  useEffect(()=>{
    onAuthStateChanged(UserAuth, (user) => {
      if (user) {
        setAvatar(true)
        setUseruid(user.uid)
        setDisplayName(user.displayName)
        setUserEmail(user.email)
        setUserPhoto(user.photoURL)
        setUserToken(user.accessToken)
        dispatch(GET_AUTH_SUCESS_fn(user.uid))
      } else {
        setDisplayName('')
        setAvatar(false)
      }
    });
  },[])
  useEffect(()=>{
    onAuthStateChanged(UserAuth, (user) => {
    if (!user) {
    dispatch(GET_AUTH_FAILURE_fn());
    }
    })},[])
  return (
    <div>HomePage
      <Link to={"/login/student"}>Login</Link><Spacer/>
      <Link to={"/register/student"}>SignUp</Link>
      <Link to={"/cart"}>cart</Link><Spacer/>
      <Link to={"/course"}>course</Link><Spacer/>
      {avatar? <VStack>
      <Image w={150} src={userPhoto} alt={displayName}/>
      <Text as={"b"} fontSize={"3xl"}>name:{displayName}</Text> <b></b>
      <Text as={"b"} fontSize={"3xl"}>Email id : {userEmail}</Text>
      <Text as={"b"} fontSize={"3xl"}>Uid:{useruid}</Text> <b></b>
      <Text as={"b"} w={"70%"} fontSize={"xm"}>accessToken: {userToken}</Text>
      <Button onClick={HandleLogOut}>Logout</Button>
      </VStack>:""}
      
    </div>
  )
}
