import { FETCH_POST, FETCH_ALL, CREATE, UPDATE, DELETE, UPDATEONE } from '../constants/actionTypes';
import * as api from '../api';

//Action Creators
export const getPost = (id,setLoading) => async (dispatch) => {
    try {
        const { data } = await api.fetchPost(id);
        //console.log(data);
        await dispatch({ type: FETCH_POST, payload: data});
        setLoading(false);
    } catch (error)
    {
        console.log(error);
    }
}

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
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
        dispatch(getPosts());
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id, handleClose) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });
        dispatch(getPosts());
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
        dispatch(getPosts());
    } catch (error) {
        console.log(error);
    }
}