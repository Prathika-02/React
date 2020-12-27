import axios from 'axios';
import { GET_ERRORS, GET_PAYMENTS, GET_PAYMENT} from './type';
export const createPayment=(payment,history)=>async dispatch=> {
    try {
        const details={
    "cardHolderName":payment.cardHolderName,
   "expiryDate":payment.expiryDate,
   "paymentStatus":payment.paymentStatus,
   "paymentMode":payment.paymentMode,
   "cardNumber":payment.cardNumber        }
        console.log(payment);
        
        await axios.post ("http://localhost:8080/payments/payment/",details)
        history.push("/dashboard");
        alert("Your Payment Details are added successfully")
      
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}
export const getPayments=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8080/payments/payment/all");
    dispatch({
        type:GET_PAYMENTS,
        payload:res.data
    })
}
export const getPayment=(id,payment,history)=>async dispatch=>{
    const res=await axios.put("http://localhost:8080/payments/payment/up/"+id,payment);
    dispatch({
        type:GET_PAYMENT,
        payload:res.data
    })
}