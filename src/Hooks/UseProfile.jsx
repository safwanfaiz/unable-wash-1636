import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { UserAuth } from '../Utils/firebase-config';

const UseProfile = (props) => {
  const [userToken,setUserToken]=useState('')
  const[useruid,setUseruid]=useState('')
  const [displayName,setDisplayName]=useState('');
  const [avatar,setAvatar] =useState(true);
  const [userEmail,setUserEmail]=useState('')
  const[userPhoto,setUserPhoto]=useState('')
  const navigate =useNavigate();
  
  
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
    } else {
      setDisplayName('')
      setAvatar(false)
    }
  });
},[])
console.log(useruid,"user id")
// useEffect(()=>{
//   onAuthStateChanged(UserAuth, (user) => {
//   if (!user) {
//   dispatch(GET_AUTH_FAILURE_fn());
//   }
//   })},[])
//   useEffect(()=>{
//     onAuthStateChanged(UserAuth, (user) => {
//         if (user) {
//               setAvatar(true);
//         } else {
//             setAvatar(false)
//         }
//     });
// },[])
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
