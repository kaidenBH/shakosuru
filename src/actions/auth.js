import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        //log in the user ...
        const { data } = await api.signIn(formData);
        
        dispatch({type: AUTH, data});

        navigate('/shakosuru/');
    } catch (error) {
        console.log(error)
    }
}
export const signup = (formData, navigate) => async (dispatch) => {
    try {
        //sign up the user ...
        
        const { data } = await api.signUp(formData);
        console.log("reached front-end");
        dispatch({type: AUTH, data});

        navigate('/shakosuru/');
    } catch (error) {
        console.log(error)
    }
}