import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPayment,createPayment } from '../../actions/PaymentAction';
import  axios from "axios";

class UpdatePayment extends Component {

    constructor(props){
        super(props);
        this.state={
            id: "",
            cardHolderName:"",
            cardNumber:"",
            paymentMode:"",
            expiryDate:""
                        
        }
           }

           onChange=(event)=>{
            this.setState(
                {[event.target.name]:event.target.value}

            );
         }

      

    onSubmit=(event)=>{
        event.preventDefault();
        const newPayment = {
            id:this.state.id,
            cardHolderName:this.state.cardHolderName,
            cardNumber:this.state.cardNumber,
            paymentMode:this.state.paymentMode,
            expiryDate:this.state.expiryDate,
            
        }
           const tt={  
            "cardHolderName":this.state.cardHolderName,
            "expiryDate":this.state.expiryDate,
            "paymentStatus":"success",
            "paymentMode":this.state.paymentMode,
            "cardNumber":this.state.cardNumber
         

           }

        //this.props.getPayment(tt,this.props.history);
        const {id} = this.props.match.params;
        console.log(id);
        axios.put("http://localhost:8080/payments/payment/up/"+id,tt);


           }
           componentDidMount(){
            const {id} = this.props.match.params;
            //this.props.getPayment(id,this.props.history);
           
         }
         
           componentWillReceiveProps(nextProps){
            const {
                id,
                cardHolderName,
                cardNumber,
                paymentMode,
                expiryDate                   
            }=nextProps.payment;
            this.setState({
                id,
                cardHolderName,
                cardNumber,
                paymentMode,
                expiryDate,
                          
            });
        }


           render() {
        return (
            <div className="payment" id="vidya3">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Update Payment Details</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Payment Id cannot be Updated"
                                        name="id"
                                        value={this.state.id}
                                        disabled />
                                </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Card Holder Name" 
                                    name="cardHolderName" 
                                    onChange={this.onChange}
                                  />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Card Number" 
                                    name="cardNumber" 
                                    onChange={this.onChange}
                                    
                                    />
                            </div>
                            
                            <h6>Expiry Date</h6>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Credit Card/Debit Card" 
                                    name="paymentMode" 
                                    onChange={this.onChange}
                                    
                                    />
                            </div>
                            
                            
                           
                           
                            <h6>Expiry Date</h6>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="YYYY-MM-DD" 
                                    name="expiryDate" 
                                    onChange={this.onChange}
                                    />
                            </div>
                            
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
UpdatePayment.propTypes = {
    getPayment:PropTypes.func.isRequired,
    createPayment:PropTypes.func.isRequired,
    payment:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    payment: state.payments.payment
    
});

export default connect(mapStateToProps,{getPayment,createPayment})(UpdatePayment);