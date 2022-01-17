import { ADD_JOB } from "./actiontype"
import { IS_LOADING} from "./actiontype";
import {IS_ERROR} from "./actiontype";


export const AddJob = (data)=>({
    type: ADD_JOB,
    payload: data
});

export const IsLoading = ()=>({
    type: IS_LOADING,
    payload: false
});

export const IsError = (data)=>({
    type: IS_ERROR,
    payload: data
});