import { DELETE_INTERNSHIPS_FAILURE, DELETE_INTERNSHIPS_REQUEST, DELETE_INTERNSHIPS_SUCCESS, GET_INTERNSHIPS_FAILURE, GET_INTERNSHIPS_REQUEST, GET_INTERNSHIPS_SUCCESS, PATCH_INTERNSHIPS_FAILURE, PATCH_INTERNSHIPS_REQUEST, PATCH_INTERNSHIPS_SUCCESS, POST_INTERNSHIPS_FAILURE, POST_INTERNSHIPS_REQUEST, POST_INTERNSHIPS_SUCCESS } from "./actionTypes"


const initalState={
    internData:[],
    isLoading:false,
    isError:true
}

export const InternshipReducer=(state=initalState,action)=>
{
   switch(action.type)
   {
     case GET_INTERNSHIPS_REQUEST: return {...state,isLoading:true};
     case GET_INTERNSHIPS_SUCCESS: return {...state,isLoading:false,internData:action.payload};
     case GET_INTERNSHIPS_FAILURE: return {...state,isLoading:false,isError:true};

     case POST_INTERNSHIPS_REQUEST: return {...state,isLoading:true};
     case POST_INTERNSHIPS_SUCCESS: return {...state,isLoading:false,internData:action.payload};
     case POST_INTERNSHIPS_FAILURE: return {...state,isLoading:false,isError:true};

     case PATCH_INTERNSHIPS_REQUEST: return {...state,isLoading:true};
     case PATCH_INTERNSHIPS_SUCCESS: return {...state,isLoading:false,internData:action.payload};
     case PATCH_INTERNSHIPS_FAILURE: return {...state,isLoading:false,isError:true};


     case DELETE_INTERNSHIPS_REQUEST: return {...state,isLoading:true};
     case DELETE_INTERNSHIPS_SUCCESS: return {...state,isLoading:false,internData:[...action.payload]};
     case DELETE_INTERNSHIPS_FAILURE: return {...state,isLoading:false,isError:true};

     default : return state;
   }
}