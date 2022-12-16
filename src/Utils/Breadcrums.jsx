import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Breadcrums = () => {
    const location = useLocation();
    const [locationname,setlocationName]=useState({});
    const [newPathName,setnewPathName]=useState("");
    useEffect(()=>{
        // setlocationName(location) ;
        // const PathName= locationname.pathname.split("/");
        // setnewPathName(PathName)
    },[location,locationname])
    console.log('newPathName',newPathName) ;
    console.log('hash', location.hash);
    console.log('pathname', location.pathname);
    console.log('search', location.search);
  return (
    <div>
      
    </div>
  )
}

export default Breadcrums
