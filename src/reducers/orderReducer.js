import { GET_ORDERS,GET_ORDER,DELETE_ORDER } from "../actions/type";

const initialState={
   orders:[],
   order:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_ORDERS:
            return{
                ...state,
                orders:action.payload
            }
            case GET_ORDER:
            return{
                ...state,
                order:action.payload
            }
            case DELETE_ORDER:
                return{
                    ...state,
                    orders:state.orders.filter(
                       order=>order.orderId!==action.payload
                    )
                };
            default:
                return state;

    }
}