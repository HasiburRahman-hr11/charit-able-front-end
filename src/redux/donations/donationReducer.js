import { ADD_NEW_DONATION_FAILED, ADD_NEW_DONATION_START, ADD_NEW_DONATION_SUCCESS, DELETE_DONATION_FAILED, DELETE_DONATION_START, DELETE_DONATION_SUCCESS, GET_ALL_DONATIONS_FAILED, GET_ALL_DONATIONS_START, GET_ALL_DONATIONS_SUCCESS, UPDATE_DONATION_FAILED, UPDATE_DONATION_START, UPDATE_DONATION_SUCCESS } from "./donationsConstants";



const initialState = {
    donations: [],
    error: null,
    isFetching: false
}

const donationReducer = (state = initialState, action) => {
    switch (action.type) {
        // Add New Donation
        case ADD_NEW_DONATION_START:
            return {
                donations: state.donations,
                error: null,
                isFetching: true
            }
        case ADD_NEW_DONATION_SUCCESS:
            const updatedDonations = [action.payload, ...state.donations];
            return {
                donations: updatedDonations,
                error: null,
                isFetching: false
            }
        case ADD_NEW_DONATION_FAILED:
            return {
                donations: state.donations,
                error: action.payload,
                isFetching: false
            }

        // Get All donations
        case GET_ALL_DONATIONS_START:
            return {
                donations: [],
                error: null,
                isFetching: true
            }
        case GET_ALL_DONATIONS_SUCCESS:
            return {
                donations: action.payload,
                error: null,
                isFetching: false
            }
        case GET_ALL_DONATIONS_FAILED:
            return {
                donations: [],
                error: action.payload,
                isFetching: false
            }


        // Update Donation
        case UPDATE_DONATION_START:
            return {
                donations: state.donations,
                error: null,
                isFetching: true
            }
        case UPDATE_DONATION_SUCCESS:
            return {
                donations: [action.payload, ...state.donations],
                error: null,
                isFetching: false
            }
        case UPDATE_DONATION_FAILED:
            return {
                donations: state.donations,
                error: action.payload,
                isFetching: false
            }

        // Delete Donation
        case DELETE_DONATION_START:
            return {
                donations: state.donations,
                error: null,
                isFetching: true
            }
        case DELETE_DONATION_SUCCESS:
            const remainDonations = state.donations.filter(data => data._id !== action.payload._id);
            return {
                donations: remainDonations,
                error: null,
                isFetching: false
            }
        case DELETE_DONATION_FAILED:
            return {
                donations: state.donations,
                error: action.payload,
                isFetching: false
            }

        default: return state;
    }
}

export default donationReducer;