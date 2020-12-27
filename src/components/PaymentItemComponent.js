import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";


class PaymentItemComponent extends React.Component {
    
    render() {
        return (
            
             <div className="container">
             <div className="card card-body bg-light mb-3">
                 <div className="row">
                     <div className="col-2">
                         <span className="mx-auto">{this.props.payment.id}</span>
                     </div>
                     <div className="col-lg-6 col-md-4 col-8">
                         <h3>{this.props.payment.cardHolderName}</h3>
                         
                         <p>{this.props.payment.expiryDate}</p>
                     </div>
                     <div className="col-md-4 d-none d-lg-block">
                         <ul className="list-group">
                             <a href="#">
                                 <li className="list-group-item board">
                                     
                                     
                                 </li>
                             </a>
                             <Link to={`/updatePayment/${this.props.payment.id}`}>
                                 <li className="list-group-item update">
                                     <i className="fa fa-edit pr-1">Update Payment Info</i>
                                 </li>
                             </Link>
                             
                             <a href="">
                                 <li className="list-group-item delete">
                                     
                                     
                                 </li>
                             </a>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
        
        )
    }
}
    




export default PaymentItemComponent;