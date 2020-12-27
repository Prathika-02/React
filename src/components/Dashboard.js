import React from 'react'
import PaymentItemComponent from './PaymentItemComponent';
import CreatePaymentButton from './payments/CreatePaymentButton';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getPayments} from '../actions/PaymentAction';

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state={
            payments:[]
        }
    }
    componentDidMount(){
        this.props.getPayments();
    }
    render() {
        const {payments} =  this.props.payments;

        return (
            <div className="payments" id="vidya2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Payment Details</h1>
                        <br />
                        <CreatePaymentButton/>
                        <br />
                        
                        
                        <hr />
    
                        {
                                payments.map((payment)=>{
                                    return  <PaymentItemComponent key={payment.id} payment={payment}/>
                                })
                            }
                      
    
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
Dashboard.propTypes={
    getPayments:PropTypes.func.isRequired

}

const mapStateToProps=(state)=>({
    payments:state.payments
});


export default connect(mapStateToProps,{getPayments})(Dashboard);