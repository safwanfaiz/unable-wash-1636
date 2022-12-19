import { GET_AUTH_FAILURE, GET_AUTH_FAILURE_COMPANY, GET_AUTH_FAILURE_STUDENT, GET_AUTH_LOADING, GET_AUTH_LOADING_COMPANY, GET_AUTH_LOADING_STUDENT, GET_AUTH_SUCESS, GET_AUTH_SUCESS_COMPANY, GET_AUTH_SUCESS_STUDENT } from "./actionTypes"
export const GET_AUTH_LOADING_fn=()=>{
    return {type: GET_AUTH_LOADING}
}
export const GET_AUTH_SUCESS_fn=(payload)=>{
    return {type: GET_AUTH_SUCESS,payload}
}
export const GET_AUTH_FAILURE_fn=()=>{
    return {type: GET_AUTH_FAILURE}
}
export const GET_STUDENT_AUTH_LOADING_fn=()=>{
    return {type: GET_AUTH_LOADING_STUDENT}
}
export const GET_STUDENT_AUTH_SUCESS_fn=(payload)=>{
    return {type: GET_AUTH_SUCESS_STUDENT,payload}
}
export const GET_STUDENT_AUTH_FAILURE_fn=()=>{
    return {type: GET_AUTH_FAILURE_STUDENT}
}
export const GET_COMPANY_AUTH_LOADING_fn=()=>{
    return {type: GET_AUTH_LOADING_COMPANY}
}
export const GET_COMPANY_AUTH_SUCESS_fn=(payload)=>{
    return {type: GET_AUTH_SUCESS_COMPANY,payload}
}
export const GET_COMPANY_AUTH_FAILURE_fn=()=>{
    return {type: GET_AUTH_FAILURE_COMPANY}
}

