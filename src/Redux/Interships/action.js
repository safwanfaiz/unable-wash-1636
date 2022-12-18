import { DELETE_INTERNSHIPS_FAILURE, DELETE_INTERNSHIPS_REQUEST, DELETE_INTERNSHIPS_SUCCESS, GET_INTERNSHIPS_FAILURE, GET_INTERNSHIPS_REQUEST, GET_INTERNSHIPS_SUCCESS, PATCH_INTERNSHIPS_FAILURE, PATCH_INTERNSHIPS_REQUEST, PATCH_INTERNSHIPS_SUCCESS, POST_INTERNSHIPS_FAILURE, POST_INTERNSHIPS_REQUEST, POST_INTERNSHIPS_SUCCESS } from "./actionTypes"
import axios from "axios"


export const getIntershipsRequest=()=>
{
    return {type:GET_INTERNSHIPS_REQUEST}
}

export const getIntershipsSuccess=(payload)=>
{
    return {type:GET_INTERNSHIPS_SUCCESS,payload}
}

export const getIntershipsFailure=()=>
{
    return {type:GET_INTERNSHIPS_FAILURE}
}

export const getInternshipsData=(params)=>dispatch=>
{
    dispatch(getIntershipsRequest())
    return axios.get(`http://localhost:8080/internData?_limit=${params}`).then(r=>{dispatch(getIntershipsSuccess(r.data))})
    .catch(e=>{dispatch(getIntershipsFailure())})
}





export const postIntershipsRequest=()=>
{
    return {type:POST_INTERNSHIPS_REQUEST}
}


export const postIntershipsSuccess=(payload)=>
{
    return {type:POST_INTERNSHIPS_SUCCESS,payload}
}

export const postIntershipsFailure=()=>
{
    return {type:POST_INTERNSHIPS_FAILURE}
}

export const postInternshipsData=(payload)=>dispatch=>
{
    dispatch(postIntershipsSuccess())
    return axios.post(`http://localhost:8080/internData`,payload).then(r=>{dispatch(getInternshipsData(10))})
    .catch(e=>{dispatch(postIntershipsFailure())})
}





export const patchIntershipsRequest=()=>
{
    return {type:PATCH_INTERNSHIPS_REQUEST}
}


export const patchIntershipsSuccess=(payload)=>
{
    return {type:PATCH_INTERNSHIPS_SUCCESS,payload}
}

export const patchIntershipsFailure=()=>
{
    return {type:PATCH_INTERNSHIPS_FAILURE}
}

export const patchInternshipsData=(payload)=>dispatch=>
{
    dispatch(patchIntershipsRequest())
    return axios.patch(`http://localhost:8080/internData/${payload.id}`,payload).then(r=>{dispatch(getInternshipsData(10))})
    .catch(e=>{dispatch(patchIntershipsFailure())})
}





export const deleteIntershipsRequest=()=>
{
    return {type:DELETE_INTERNSHIPS_REQUEST}
}


export const deleteIntershipsSuccess=(payload)=>
{
    return {type:DELETE_INTERNSHIPS_SUCCESS,payload}
}

export const deleteIntershipsFailure=()=>
{
    return {type:DELETE_INTERNSHIPS_FAILURE}
}

export const deleteInternshipsData=(id)=>dispatch=>
{
    dispatch(deleteIntershipsRequest())
    return axios.delete(`http://localhost:8080/internData/${id}`).then(r=>{dispatch(getIntershipsSuccess(10))})
    .catch(e=>{dispatch(deleteIntershipsFailure())})
}

