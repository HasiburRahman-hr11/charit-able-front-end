import { DELETE_USER_FAILED, DELETE_USER_START, DELETE_USER_SUCCESS, GET_ALL_USERS_FAILED, GET_ALL_USERS_START, GET_ALL_USERS_SUCCESS, UPDATE_USER_FAILED, UPDATE_USER_START, UPDATE_USER_SUCCESS } from "./usersConstants";


const initialState = {
    users: [],
    error: null,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS_START:
            return {
                users: [],
                error: null,
                isFetching: true
            }
        case GET_ALL_USERS_SUCCESS:
            return {
                users: action.payload,
                error: null,
                isFetching: false
            }
        case GET_ALL_USERS_FAILED:
            return {
                users: [],
                error: action.payload,
                isFetching: false
            }


        // Update User
        case UPDATE_USER_START:
            return {
                users: state.users,
                error: null,
                isFetching: true
            }
        case UPDATE_USER_SUCCESS:

            return {
                users: [action.payload, ...state.users.filter(data => data._id !== action.payload._id)],
                error: null,
                isFetching: false
            }
        case UPDATE_USER_FAILED:
            return {
                users: state.users,
                error: action.payload,
                isFetching: false
            }

        // Delete User
        case DELETE_USER_START:
            return {
                users: state.users,
                error: null,
                isFetching: true
            }
        case DELETE_USER_SUCCESS:
            const remainingUsers = state.users.filter(user => user._id !== action.payload._id);
            return {
                users: remainingUsers,
                error: null,
                isFetching: false
            }
        case DELETE_USER_FAILED:
            return {
                users: state.users,
                error: action.payload,
                isFetching: false
            }

        default: return state;
    }
}

export default usersReducer;