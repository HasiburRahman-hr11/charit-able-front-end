
import axios from 'axios';
import { errorNotify, successNotify } from '../../utils/toastify';
import { addNewDonationStart, addNewDonationSuccess, addNewDonationFailed, getAllDonationsStart, getAllDonationsSuccess, getAllDonationsFailed, updateDonationFailed, updateDonationStart, updateDonationSuccess, deleteDonationFailed, deleteDonationStart, deleteDonationSuccess } from './donationActions';
// Add New Donation
export const addNewDonation = async (dispatch, formData, navigate) => {
    dispatch(addNewDonationStart());
    try {
        const { data } = await axios.post('https://charit-able-api.herokuapp.com/donations/add', formData);
        dispatch(addNewDonationSuccess(data));
        successNotify('Donation received successfully');
        navigate(`/`);
    } catch (error) {
        console.log(error);
        dispatch(addNewDonationFailed(error));
        errorNotify('Could not received donation');
    }
}

// Get All Donations
export const getAllDonations = async (dispatch) => {
    dispatch(getAllDonationsStart())
    try {
        const { data } = await axios.get('https://charit-able-api.herokuapp.com/donations');
        dispatch(getAllDonationsSuccess(data))
    } catch (error) {
        console.log(error);
        dispatch(getAllDonationsFailed(error))
    }
}

// Update Donation
export const updateDonation = async (dispatch, id, formData) => {
    dispatch(updateDonationStart());
    try {
        const { data } = await axios.put(`https://charit-able-api.herokuapp.com/donations/${id}`, formData);
        dispatch(updateDonationSuccess(data));
        successNotify('Donation updated successfully');
    } catch (error) {
        console.log(error);
        dispatch(updateDonationFailed(error));
        errorNotify('Could not update donation')
    }
}

// Delete Donation
export const deleteDonation = async (dispatch, id) => {
    dispatch(deleteDonationStart());
    try {
        const { data } = await axios.delete(`https://charit-able-api.herokuapp.com/donations/${id}`);
        dispatch(deleteDonationSuccess(data));
        successNotify('Donation deleted successfully');
    } catch (error) {
        console.log(error);
        dispatch(deleteDonationFailed(error));
        errorNotify('Could not delete donation')
    }
}