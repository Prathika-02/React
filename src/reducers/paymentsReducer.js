import { GET_PAYMENTS,GET_PAYMENT } from "../actions/type";

const initialState={
    payments:[],
    payment:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_PAYMENTS:
            return{
                ...state,
                payments:action.payload
            }
            case GET_PAYMENT:
                return{
                    ...state,
                    payment:action.payload
                }
               

            default:
                return state;
                
    }
}