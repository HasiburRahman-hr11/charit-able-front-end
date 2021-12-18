import {GET_USER_FAILED, GET_USER_START, GET_USER_SUCCESS , LOGOUT_SUCCESS} from './authConstants';

export const getUserStart = () => ({type:GET_USER_START});
export const getUserSuccess = (user) => ({type:GET_USER_SUCCESS , payload:user});
export const getUserFailed = (error) => ({type:GET_USER_FAILED , payload:error});

export const logoutSuccess = () => ({type:LOGOUT_SUCCESS})