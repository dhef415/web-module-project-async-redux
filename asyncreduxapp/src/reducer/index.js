import data from './../data/tempdata';

import { FETCH_START, FETCH_SUCCESS } from './../actions';

const initialState = {
    gifs: [],
    loading: false,
    err: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return{
                ...state,
                loading:true,
                err:''
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                gifs:action.payload,
                loading:false,
                err:''
                
            }
        default:
            return(state);
    }
}

export default reducer;