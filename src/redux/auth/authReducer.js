import { GET_USER_FAILED, GET_USER_START, GET_USER_SUCCESS, LOGOUT_SUCCESS } from "./authConstants";

const getUser = () => {
    if (typeof window !== "undefined") {
        if (localStorage.getItem('charitAble-user')) {
            return JSON.parse(localStorage.getItem('charitAble-user'))
        } else {
            return {}
        }
    }
}


const initialState = {
    user: getUser(),
    error: '',
    isFetching: false
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_START:
            return {
                user: {},
                isFetching: true
            }
        case GET_USER_SUCCESS:
            return {
                user: action.payload,
                error: '',
                isFetching: false
            }
        case GET_USER_FAILED:
            return {
                user: {},
                error: action.payload,
                isFetching: false
            }
        case LOGOUT_SUCCESS:
            return {
                user: {},
                error: '',
                isFetching: false
            }
        default: return state;
    }
}

export default userReducer;