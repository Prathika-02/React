import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPayment } from '../../actions/PaymentAction';
import classnames from "classnames";

class AddPayment extends Component {

    constructor(props){
        super(props);
        this.state={
            cardHolderName:"",
            cardNumber:"",
            paymentMode:"",
            expiryDate:"",
            errors:{}
            
        }
        //this.onChange=this.onChange.bind(this);
    }

      // life cycle hook
   componentWillReceiveProps(nextProps) {
    console.log("--------componentWillReceiveProps : Called----------");
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

    onChange=(event)=>{
        console.log(event.target.value);
       this.setState(
           {[event.target.name]:event.target.value}
       );
    }

    onSubmit=(event)=>{
        event.preventDefault();
        const newPayment = {
            cardHolderName:this.state.cardHolderName,
            cardNumber:this.state.cardNumber,
            paymentMode:this.state.paymentMode,
            expiryDate:this.state.expiryDate,
            
        }
        this.props.createPayment(newPayment,this.props.history);
      
    }
    render() {
     
        const {errors}=this.state;
        return (
            <div className="payment" id="vidya">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Payment Details</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.cardHolderName})}
                                    placeholder="Card Holder Name" 
                                    name="cardHolderName" 
                                    onChange={this.onChange}
                                    value={this.state.cardHolderName}/>
                                    {errors.cardHolderName && (
                                        <div className="invalid-feedback">
                                            {errors.cardHolderName}
                                            </div>
                                    )}
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.cardNumber})}
                                    placeholder="Card Number" 
                                    name="cardNumber" 
                                    onChange={this.onChange}
                                    value={this.state.cardNumber}
                                    />
                                    {errors.cardNumber && (
                                        <div className="invalid-feedback">
                                            {errors.cardNumber}
                                        </div>
                                    )}
                                    </div>
                                
                                    <h6>Payment Mode</h6>

                                    <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.paymentMode})}
                                    placeholder="Credit Card/Debit Card" 
                                    name="paymentMode" 
                                    onChange={this.onChange}
                                    value={this.state.paymentMode}
                                    />
                                    {errors.paymentMode && (
                                        <div className="invalid-feedback">
                                            {errors.paymentMode}
                                        </div>
                                    )}
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
AddPayment.propTypes = {
    createPayment:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps,{createPayment})(AddPayment);