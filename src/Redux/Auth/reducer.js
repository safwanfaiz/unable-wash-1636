import { GET_AUTH_FAILURE, GET_AUTH_FAILURE_STUDENT, GET_AUTH_LOADING, GET_AUTH_LOADING_STUDENT, GET_AUTH_SUCESS, GET_AUTH_SUCESS_STUDENT } from "./actionTypes"

const initialState={
    isAuth:false,
    isAuthloading:false,
    uid_token:"",
    isAuthError:false,
    studentAuth:false,
    companyAuth:false
}
export const reducer =(oldstate=initialState,action)=>{
    switch(action.type){
        case GET_AUTH_LOADING:{
            return({
                ...oldstate,isAuthloading:true,isAuthError:false
            })
        }
        case GET_AUTH_SUCESS:{
            return({
                ...oldstate,isAuthloading:false,isAuth:true,uid_token:action.payload
            })
        }
        case GET_AUTH_FAILURE:{
            return({
                ...oldstate,isAuthError:false,isAuth:false
            })
        }
        case GET_AUTH_LOADING_STUDENT:{
            return({
                ...oldstate,isAuthloading:true,isAuthError:false
            })
        }
        case GET_AUTH_SUCESS_STUDENT:{
            return({
                ...oldstate,isAuthloading:false,isAuth:true,uid_token:action.payload
            })
        }
        case GET_AUTH_FAILURE_STUDENT:{
            return({
                ...oldstate,isAuthError:false,isAuth:false
            })
        }
        default: return oldstate ;
    }
}