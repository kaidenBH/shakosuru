import { START_LOADING, END_LOADING } from '../constants/actionTypes';

const loadreducer = (isLoading= true,action) => {
    switch (action.type ){ 
        case START_LOADING:
            return isLoading = true;
        case END_LOADING:
            return isLoading = false;
        default:
            return isLoading;
    }
}

export default loadreducer