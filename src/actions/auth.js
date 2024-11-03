import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData, navigate, setLoading) => async (dispatch) => {
    try {
        //log in the user ...
        const { data } = await api.signIn(formData);
        
        dispatch({type: AUTH, data});

        navigate('/thoughts/');
    } catch (error) {
        console.log(error)
    }
    setLoading(false);
}
export const signup = (formData, navigate, setLoading) => async (dispatch) => {
    try {
        //sign up the user ...
        const { data } = await api.signUp(formData);
        dispatch({type: AUTH, data});

        navigate('/thoughts/');
    } catch (error) {
        console.log(error)
    }
    setLoading(false);
}

export const updateUser = (id,formData, navigate, setLoading) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(id,formData);
        dispatch({type: AUTH, data});
        navigate('/thoughts/');
    } catch (error) {
        console.log(error);
    }
    setLoading(false);
}