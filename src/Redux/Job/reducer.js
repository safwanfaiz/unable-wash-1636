import { DELETE_JOBS_FAILURE, DELETE_JOBS_REQUEST, DELETE_JOBS_SUCCESS, GET_JOBS_FAILURE, GET_JOBS_REQUEST, GET_JOBS_SUCCESS, PATCH_JOBS_FAILURE, PATCH_JOBS_REQUEST, PATCH_JOBS_SUCCESS, POST_JOBS_FAILURE, POST_JOBS_REQUEST, POST_JOBS_SUCCESS } from "./actionTypes"


const initalState={
    jobData:[],
    isLoading:false,
    isError:true
}

export const JobsReducer=(state=initalState,action)=>
{
   switch(action.type)
   {
     case GET_JOBS_REQUEST: return {...state,isLoading:true};
     case GET_JOBS_SUCCESS: return {...state,isLoading:false,jobData:action.payload};
     case GET_JOBS_FAILURE: return {...state,isLoading:false,isError:true};

     case POST_JOBS_REQUEST: return {...state,isLoading:true};
     case POST_JOBS_SUCCESS: return {...state,isLoading:false,jobData:action.payload};
     case POST_JOBS_FAILURE: return {...state,isLoading:false,isError:true};

     case PATCH_JOBS_REQUEST: return {...state,isLoading:true};
     case PATCH_JOBS_SUCCESS: return {...state,isLoading:false,jobData:action.payload};
     case PATCH_JOBS_FAILURE: return {...state,isLoading:false,isError:true};


     case DELETE_JOBS_REQUEST: return {...state,isLoading:true};
     case DELETE_JOBS_SUCCESS: return {...state,isLoading:false,jobData:[...action.payload]};
     case DELETE_JOBS_FAILURE: return {...state,isLoading:false,isError:true};

     default : return state;
   }
}