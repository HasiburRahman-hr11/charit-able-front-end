import { ADD_NEW_BLOG_FAILED, ADD_NEW_BLOG_START, ADD_NEW_BLOG_SUCCESS, DELETE_BLOG_FAILED, DELETE_BLOG_START, DELETE_BLOG_SUCCESS, GET_ALL_BLOGS_FAILED, GET_ALL_BLOGS_START, GET_ALL_BLOGS_SUCCESS, UPDATE_BLOG_FAILED, UPDATE_BLOG_START, UPDATE_BLOG_SUCCESS } from "./blogsConstants";

export const addNewBlogStart = () => ({ type: ADD_NEW_BLOG_START });
export const addNewBlogSuccess = (data) => ({ type: ADD_NEW_BLOG_SUCCESS, payload: data });
export const addNewBlogFailed = (error) => ({ type: ADD_NEW_BLOG_FAILED, payload: error });


export const getAllBlogsStart = () => ({ type: GET_ALL_BLOGS_START });
export const getAllBlogsSuccess = (Blogs) => ({ type: GET_ALL_BLOGS_SUCCESS, payload: Blogs });
export const getAllBlogsFailed = (error) => ({ type: GET_ALL_BLOGS_FAILED, payload: error });

export const updateBlogStart = () => ({ type: UPDATE_BLOG_START });
export const updateBlogSuccess = (data) => ({ type: UPDATE_BLOG_SUCCESS, payload: data });
export const updateBlogFailed = (error) => ({ type: UPDATE_BLOG_FAILED, payload: error });

export const deleteBlogStart = () => ({ type: DELETE_BLOG_START });
export const deleteBlogSuccess = (data) => ({ type: DELETE_BLOG_SUCCESS, payload: data });
export const deleteBlogFailed = (error) => ({ type: DELETE_BLOG_FAILED, payload: error });