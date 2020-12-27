import axios from 'axios';
import { DELETE_PRODUCT, GET_ERRORS, GET_PRODUCT,GET_PRODUCTS } from './type';
export const createProduct=(product,history)=>async dispatch=> {
    try {
        const res =await axios.post ("http://localhost:8080/api/product",product)
        alert("Created successfully")
       // history.push("/addProduct");
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}
export const getProducts=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8080/api/product/all");
    dispatch({
        type:GET_PRODUCTS,
        payload:res.data
    })
}
export const getProduct=(productId,product,history)=>async dispatch=>{
    const res=await axios.put("http://localhost:8080/api/product/"+productId,product);
    dispatch({
        type:GET_PRODUCT,
        payload:res.data
    })
}

export const deleteProduct=(productId)=>async dispatch=>{
    if(window.confirm("Are you sure ? This will delete the product and the data related to it")) {
        await axios.delete(`http://localhost:8080/api/product/delete/${productId}`);
        dispatch({
            type:DELETE_PRODUCT,
            payload:productId
        })
     }
} 