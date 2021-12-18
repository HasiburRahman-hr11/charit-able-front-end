import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';
import blogsReducer from './blogs/blogsReducer';
import casesReducer from './cases/casesReducer';
import donationReducer from './donations/donationReducer';
import usersReducer from './users/usersReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    cases: casesReducer,
    blogs: blogsReducer,
    donations: donationReducer
});

export default rootReducer;