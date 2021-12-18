import { deleteUserFailed, deleteUserStart, deleteUserSuccess, getAllUsersFailed, getAllUsersStart, getAllUsersSuccess, updateUserFailed, updateUserStart, updateUserSuccess } from "./usersActions"
import axios from 'axios';
import { errorNotify, successNotify } from "../../utils/toastify";

export const getAllUsers = async (dispatch) => {
    dispatch(getAllUsersStart())
    try {
        const { data } = await axios.get('https://charit-able-api.herokuapp.com/users');
        dispatch(getAllUsersSuccess(data));
    } catch (error) {
        console.log(error);
        dispatch(getAllUsersFailed(error))
    }
}

export const updateUser = async (dispatch , userId , userData) => {
    dispatch(updateUserStart())
    try {
        const { data } = await axios.put(`https://charit-able-api.herokuapp.com/users/${userId}` ,userData);
        dispatch(updateUserSuccess(data));
        successNotify('User updated successfully')
    } catch (error) {
        console.log(error);
        dispatch(updateUserFailed(error));
        errorNotify('Could not update the user')
    }
}


export const deleteUser = async (dispatch , userId ) => {
    dispatch(deleteUserStart())
    try {
        const { data } = await axios.delete(`https://charit-able-api.herokuapp.com/users/${userId}`);
        dispatch(deleteUserSuccess(data));
    } catch (error) {
        console.log(error);
        dispatch(deleteUserFailed(error));
    }
}