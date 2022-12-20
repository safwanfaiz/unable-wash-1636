import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { GET_AUTH_FAILURE_fn, GET_AUTH_SUCESS_fn } from '../Redux/Auth/action';
import { UserAuth } from '../Utils/firebase-config';

const UseProfile = (props) => {
  const [userToken,setUserToken]=useState('')
  const[useruid,setUseruid]=useState('')
  const [displayName,setDisplayName]=useState('');
  const [avatar,setAvatar] =useState(true);
  const [userEmail,setUserEmail]=useState('')
  const[userPhoto,setUserPhoto]=useState('')
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const usersc = useSelector((state)=>state.Auth)

  const HandleLogOut =()=>{
    signOut(UserAuth).then(() => {
    // toast.success("Logout Sucessfull")
    navigate("/")
  }).catch((error) => {
    // toast.error(error.massege)
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
  return {
    avatar,
    userToken,
    useruid,
    displayName,
    userEmail,
    userPhoto,
    HandleLogOut
  }
}

export default UseProfile
