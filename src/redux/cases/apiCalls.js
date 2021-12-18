
import axios from 'axios';
import { errorNotify, successNotify } from '../../utils/toastify';
import { addNewCaseFailed, addNewCaseStart, addNewCaseSuccess, getAllCasesStart, getAllCasesSuccess, getAllCasesFailed, deleteCaseStart, deleteCaseSuccess, deleteCaseFailed, updateCaseStart, updateCaseSuccess, updateCaseFailed } from './casesActions';
// Add New Case
export const addNewCase = async (dispatch, formData, navigate) => {
    dispatch(addNewCaseStart());
    try {
        const { data } = await axios.post('https://charit-able-api.herokuapp.com/cases/add', formData);
        dispatch(addNewCaseSuccess(data));
        successNotify('Case added successfully');
        navigate(`/dashboard/cases/edit/${data._id}`);
    } catch (error) {
        console.log(error);
        dispatch(addNewCaseFailed(error));
        errorNotify('Could not add case')
    }
}

// Get All Cases
export const getAllCases = async (dispatch) => {
    dispatch(getAllCasesStart())
    try {
        const { data } = await axios.get('https://charit-able-api.herokuapp.com/cases');
        dispatch(getAllCasesSuccess(data))
    } catch (error) {
        console.log(error);
        dispatch(getAllCasesFailed(error))
    }
}

// Update Case
export const updateCase = async (dispatch, id, formData) => {
    dispatch(updateCaseStart());
    try {
        const { data } = await axios.put(`https://charit-able-api.herokuapp.com/cases/${id}`, formData);
        dispatch(updateCaseSuccess(data));
        successNotify('Case updated successfully');
    } catch (error) {
        console.log(error);
        dispatch(updateCaseFailed(error));
        errorNotify('Could not update case')
    }
}

// Delete Case
export const deleteCase = async (dispatch, id) => {
    dispatch(deleteCaseStart());
    try {
        const { data } = await axios.delete(`https://charit-able-api.herokuapp.com/cases/${id}`);
        dispatch(deleteCaseSuccess(data));
        successNotify('Case deleted successfully');
    } catch (error) {
        console.log(error);
        dispatch(deleteCaseFailed(error));
        errorNotify('Could not delete case')
    }
}