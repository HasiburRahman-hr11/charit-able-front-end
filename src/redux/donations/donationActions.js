import { ADD_NEW_DONATION_FAILED, ADD_NEW_DONATION_START, ADD_NEW_DONATION_SUCCESS, DELETE_DONATION_FAILED, DELETE_DONATION_START, DELETE_DONATION_SUCCESS, GET_ALL_DONATIONS_FAILED, GET_ALL_DONATIONS_START, GET_ALL_DONATIONS_SUCCESS, UPDATE_DONATION_FAILED, UPDATE_DONATION_START, UPDATE_DONATION_SUCCESS } from "./donationsConstants";

export const addNewDonationStart = () => ({ type: ADD_NEW_DONATION_START });
export const addNewDonationSuccess = (data) => ({ type: ADD_NEW_DONATION_SUCCESS, payload: data });
export const addNewDonationFailed = (error) => ({ type: ADD_NEW_DONATION_FAILED, payload: error });


export const getAllDonationsStart = () => ({ type: GET_ALL_DONATIONS_START });
export const getAllDonationsSuccess = (Donations) => ({ type: GET_ALL_DONATIONS_SUCCESS, payload: Donations });
export const getAllDonationsFailed = (error) => ({ type: GET_ALL_DONATIONS_FAILED, payload: error });

export const updateDonationStart = () => ({ type: UPDATE_DONATION_START });
export const updateDonationSuccess = (data) => ({ type: UPDATE_DONATION_SUCCESS, payload: data });
export const updateDonationFailed = (error) => ({ type: UPDATE_DONATION_FAILED, payload: error });

export const deleteDonationStart = () => ({ type: DELETE_DONATION_START });
export const deleteDonationSuccess = (data) => ({ type: DELETE_DONATION_SUCCESS, payload: data });
export const deleteDonationFailed = (error) => ({ type: DELETE_DONATION_FAILED, payload: error });