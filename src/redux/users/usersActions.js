import { DELETE_USER_FAILED, DELETE_USER_START, DELETE_USER_SUCCESS, GET_ALL_USERS_FAILED, GET_ALL_USERS_START, GET_ALL_USERS_SUCCESS, UPDATE_USER_FAILED, UPDATE_USER_START, UPDATE_USER_SUCCESS } from "./usersConstants";


export const getAllUsersStart = () => ({ type: GET_ALL_USERS_START });
export const getAllUsersSuccess = (users) => ({ type: GET_ALL_USERS_SUCCESS, payload: users });
export const getAllUsersFailed = (error) => ({ type: GET_ALL_USERS_FAILED, payload: error });


export const updateUserStart = () => ({ type: UPDATE_USER_START });
export const updateUserSuccess = (user) => ({ type: UPDATE_USER_SUCCESS, payload: user });
export const updateUserFailed = (error) => ({ type: UPDATE_USER_FAILED, payload: error });


export const deleteUserStart = () => ({ type: DELETE_USER_START });
export const deleteUserSuccess = (user) => ({ type: DELETE_USER_SUCCESS, payload: user });
export const deleteUserFailed = (error) => ({ type: DELETE_USER_FAILED, payload: error });