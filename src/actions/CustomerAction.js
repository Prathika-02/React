import axios from 'axios';

import { GET_ERRORS, GET_CUSTOMERS ,GET_CUSTOMER, DELETE_CUSTOMER} from './type';
export const createCustomer=(customer,history)=>async dispatch=> {
    try {
        //const res =await axios.post ("http://localhost:8080/api/customers",customer)
        await axios.post ("http://localhost:8080/api/customers",customer)
        history.push("/customer");
        alert("customer added successfully")
    } catch (error) {
        console.log(customer);
        console.log(error.response);
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}
    export const getCustomers=()=>async dispatch=>{
        const res=await axios.get("http://localhost:8080/api/customers/all");
        
        dispatch({
            type:GET_CUSTOMERS,
            payload:res.data
        })
       
    }

    export const getCustomer=(identifier,history)=>async dispatch=>{
        const res=await axios.get(`http://localhost:8080/api/customers/${identifier}`);
        
        dispatch({
            type:GET_CUSTOMER,
            payload:res.data
        })
        
    }

    export const deleteCustomer=(identifier)=>async dispatch=>{
        if(window.confirm("Are you sure ? This will delete the customer and the data related to it")) {
            await axios.delete(`http://localhost:8080/api/customers/${identifier}`);
            alert("customer deleted successfully!!")
            dispatch({
                type:DELETE_CUSTOMER,
                payload:identifier
            })
         }
} 
    
