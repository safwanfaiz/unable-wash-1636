import { DELETE_JOBS_FAILURE, DELETE_JOBS_REQUEST, DELETE_JOBS_SUCCESS, GET_JOBS_FAILURE, GET_JOBS_REQUEST, GET_JOBS_SUCCESS, PATCH_JOBS_FAILURE, PATCH_JOBS_REQUEST, PATCH_JOBS_SUCCESS, POST_JOBS_FAILURE, POST_JOBS_REQUEST, POST_JOBS_SUCCESS } from "./actionTypes"
import axios from "axios"


export const getJobsRequest=()=>
{
    return {type:GET_JOBS_REQUEST}
}

export const getJobsSuccess=(payload)=>
{
    return {type:GET_JOBS_SUCCESS,payload}
}

export const getJobsFailure=()=>
{
    return {type:GET_JOBS_FAILURE}
}

export const getJobsData=(params)=>dispatch=>
{
    dispatch(getJobsRequest())
    return axios.get(`http://localhost:8080/jobData`).then(r=>{dispatch(getJobsSuccess(r.data))})
    .catch(e=>{dispatch(getJobsFailure())})
}





export const postJobsRequest=()=>
{
    return {type:POST_JOBS_REQUEST}
}


export const postJobsSuccess=(payload)=>
{
    return {type:POST_JOBS_SUCCESS,payload}
}

export const postJobsFailure=()=>
{
    return {type:POST_JOBS_FAILURE}
}

export const postJobsData=(payload)=>dispatch=>
{
    dispatch(postJobsRequest())
    return axios.post(`http://localhost:8080/jobData`,payload).then(r=>{dispatch(getJobsData())})
    .catch(e=>{dispatch(postJobsFailure())})
}





export const patchJobsRequest=()=>
{
    return {type:PATCH_JOBS_REQUEST}
}


export const patchJobsSuccess=(payload)=>
{
    return {type:PATCH_JOBS_SUCCESS,payload}
}

export const patchJobsFailure=()=>
{
    return {type:PATCH_JOBS_FAILURE}
}

export const patchJobsData=(payload)=>dispatch=>
{
    dispatch(patchJobsRequest())
    return axios.patch(`http://localhost:8080/jobData/${payload.id}`,payload).then(r=>{dispatch(getJobsData())})
    .catch(e=>{dispatch(patchJobsFailure())})
}





export const deleteJobsRequest=()=>
{
    return {type:DELETE_JOBS_REQUEST}
}


export const deleteJobsSuccess=(payload)=>
{
    return {type:DELETE_JOBS_SUCCESS,payload}
}

export const deleteJobsFailure=()=>
{
    return {type:DELETE_JOBS_FAILURE}
}

export const deleteJobsData=(id)=>dispatch=>
{
    dispatch(deleteJobsRequest())
    return axios.delete(`http://localhost:8080/jobData/${id}`).then(r=>{dispatch(getJobsData())})
    .catch(e=>{dispatch(deleteJobsFailure())})
}

