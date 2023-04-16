import { FETCH_POST, FETCH_ALL, CREATE, UPDATE, DELETE, UPDATEONE,START_LOADING,END_LOADING } from '../constants/actionTypes';
import * as api from '../api';

//Action Creators
let AllData = null;
export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.fetchPost(id);
        //console.log(data);
        await dispatch({ type: FETCH_POST, payload: data});
        dispatch({type: END_LOADING});
    } catch (error)
    {
        console.log(error);
    }
}

export const getPostsBySearch = (prompts) => async (dispatch) => {
    try {
        const filteredData = AllData.filter(field => field['title'].toLowerCase().includes(prompts.toLowerCase()) 
                                                || field['message'].toLowerCase().includes(prompts.toLowerCase()) 
                                                || field['tags'].some(tag => tag.toLowerCase().includes(prompts.toLowerCase())));
        //console.log(filteredData);
        dispatch({ type: FETCH_ALL, payload: filteredData});
    } catch (error)
    {
        console.log(error);
    }
}

export const getPosts = () => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.fetchPosts();
        AllData = data;
        dispatch({ type: FETCH_ALL, payload: data});
        dispatch({type: END_LOADING});
    } catch (error)
    {
        console.log(error);
    }
}
export const getPostsWithoutLoad = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        AllData = data;
        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error)
    {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.response.status);        
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data });
        dispatch(getPostsWithoutLoad());
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id, handleClose) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });
        dispatch(getPostsWithoutLoad());
        handleClose();
    } catch (error) {
        console.log(error);
    }
}

export const likespecificPost = (id,setLoading) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: UPDATEONE, payload: data });
        dispatch(getPost(id,setLoading));
    } catch (error) {
        console.log(error);
    }
}
export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: UPDATE, payload: data });
        dispatch(getPostsWithoutLoad());
    } catch (error) {
        console.log(error);
    }
}