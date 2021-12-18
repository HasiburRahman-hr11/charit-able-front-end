import { ADD_NEW_CASE_FAILED, ADD_NEW_CASE_START, ADD_NEW_CASE_SUCCESS, DELETE_CASE_FAILED, DELETE_CASE_START, DELETE_CASE_SUCCESS, GET_ALL_CASES_FAILED, GET_ALL_CASES_START, GET_ALL_CASES_SUCCESS, UPDATE_CASE_FAILED, UPDATE_CASE_START, UPDATE_CASE_SUCCESS } from "./casesConstants";

export const addNewCaseStart = () => ({ type: ADD_NEW_CASE_START });
export const addNewCaseSuccess = (data) => ({ type: ADD_NEW_CASE_SUCCESS, payload: data });
export const addNewCaseFailed = (error) => ({ type: ADD_NEW_CASE_FAILED, payload: error });


export const getAllCasesStart = () => ({ type: GET_ALL_CASES_START });
export const getAllCasesSuccess = (cases) => ({ type: GET_ALL_CASES_SUCCESS, payload: cases });
export const getAllCasesFailed = (error) => ({ type: GET_ALL_CASES_FAILED, payload: error });

export const updateCaseStart = () => ({ type: UPDATE_CASE_START });
export const updateCaseSuccess = (data) => ({ type: UPDATE_CASE_SUCCESS, payload: data });
export const updateCaseFailed = (error) => ({ type: UPDATE_CASE_FAILED, payload: error });

export const deleteCaseStart = () => ({ type: DELETE_CASE_START });
export const deleteCaseSuccess = (data) => ({ type: DELETE_CASE_SUCCESS, payload: data });
export const deleteCaseFailed = (error) => ({ type: DELETE_CASE_FAILED, payload: error });