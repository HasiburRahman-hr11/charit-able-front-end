import {ADD_NEW_BLOG_FAILED, ADD_NEW_BLOG_START, ADD_NEW_BLOG_SUCCESS, DELETE_BLOG_FAILED, DELETE_BLOG_START, DELETE_BLOG_SUCCESS, GET_ALL_BLOGS_FAILED, GET_ALL_BLOGS_START, GET_ALL_BLOGS_SUCCESS, UPDATE_BLOG_FAILED, UPDATE_BLOG_START, UPDATE_BLOG_SUCCESS } from "./blogsConstants"



const initialState = {
    blogs: [],
    error: null,
    isFetching: false
}

const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        // Add New Blog
        case ADD_NEW_BLOG_START:
            return {
                blogs: state.blogs,
                error: null,
                isFetching: true
            }
        case ADD_NEW_BLOG_SUCCESS:
            const updatedBlogs = [action.payload, ...state.blogs];
            return {
                blogs: updatedBlogs,
                error: null,
                isFetching: false
            }
        case ADD_NEW_BLOG_FAILED:
            return {
                blogs: state.blogs,
                error: action.payload,
                isFetching: false
            }

        // Get All Blogs
        case GET_ALL_BLOGS_START:
            return {
                blogs: [],
                error: null,
                isFetching: true
            }
        case GET_ALL_BLOGS_SUCCESS:
            return {
                blogs: action.payload,
                error: null,
                isFetching: false
            }
        case GET_ALL_BLOGS_FAILED:
            return {
                blogs: [],
                error: action.payload,
                isFetching: false
            }


        // Update Blog
        case UPDATE_BLOG_START:
            return {
                blogs: state.blogs,
                error: null,
                isFetching: true
            }
        case UPDATE_BLOG_SUCCESS:
            return {
                blogs: [action.payload, ...state.blogs.filter(data => data._id !== action.payload._id)],
                error: null,
                isFetching: false
            }
        case UPDATE_BLOG_FAILED:
            return {
                blogs: state.blogs,
                error: action.payload,
                isFetching: false
            }

        // Delete Blog
        case DELETE_BLOG_START:
            return {
                blogs: state.blogs,
                error: null,
                isFetching: true
            }
        case DELETE_BLOG_SUCCESS:
            const remainBlogs = state.blogs.filter(data => data._id !== action.payload._id);
            return {
                blogs: remainBlogs,
                error: null,
                isFetching: false
            }
        case DELETE_BLOG_FAILED:
            return {
                blogs: state.blogs,
                error: action.payload,
                isFetching: false
            }

        default: return state;
    }
}

export default blogsReducer;