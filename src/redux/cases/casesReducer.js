import { ADD_NEW_CASE_FAILED, ADD_NEW_CASE_START, ADD_NEW_CASE_SUCCESS, DELETE_CASE_FAILED, DELETE_CASE_START, DELETE_CASE_SUCCESS, GET_ALL_CASES_FAILED, GET_ALL_CASES_START, GET_ALL_CASES_SUCCESS, UPDATE_CASE_FAILED, UPDATE_CASE_START, UPDATE_CASE_SUCCESS } from "./casesConstants"



const initialState = {
    cases: [],
    error: null,
    isFetching: false
}

const casesReducer = (state = initialState, action) => {
    switch (action.type) {
        // Add New Case
        // Update Case
        case ADD_NEW_CASE_START:
            return {
                cases: state.cases,
                error: null,
                isFetching: true
            }
        case ADD_NEW_CASE_SUCCESS:
            const updatedCases = [action.payload, ...state.cases];
            return {
                cases: updatedCases,
                error: null,
                isFetching: false
            }
        case ADD_NEW_CASE_FAILED:
            return {
                cases: state.cases,
                error: action.payload,
                isFetching: false
            }

        // Get All Cases
        case GET_ALL_CASES_START:
            return {
                cases: [],
                error: null,
                isFetching: true
            }
        case GET_ALL_CASES_SUCCESS:
            return {
                cases: action.payload,
                error: null,
                isFetching: false
            }
        case GET_ALL_CASES_FAILED:
            return {
                cases: [],
                error: action.payload,
                isFetching: false
            }


        // Update Case
        case UPDATE_CASE_START:
            return {
                cases: state.cases,
                error: null,
                isFetching: true
            }
        case UPDATE_CASE_SUCCESS:
            return {
                cases: [action.payload, ...state.cases.filter(data => data._id !== action.payload._id)],
                error: null,
                isFetching: false
            }
        case UPDATE_CASE_FAILED:
            return {
                cases: state.cases,
                error: action.payload,
                isFetching: false
            }

        // Delete Case
        case DELETE_CASE_START:
            return {
                cases: state.cases,
                error: null,
                isFetching: true
            }
        case DELETE_CASE_SUCCESS:
            const remainCases = state.cases.filter(data => data._id !== action.payload._id);
            return {
                cases: remainCases,
                error: null,
                isFetching: false
            }
        case DELETE_CASE_FAILED:
            return {
                cases: state.cases,
                error: action.payload,
                isFetching: false
            }

        default: return state;
    }
}

export default casesReducer;