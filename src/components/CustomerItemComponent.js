import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCustomer } from '../actions/CustomerAction';


class CustomerItemComponent extends React.Component {
    onDeleteClick=(identifier)=>{
        console.log('--------CustomerItemComponent:onDeleteClick Called--------')
        this.props.deleteCustomer(identifier);
        //console.log(id);
       }
    render() {
        const {customer} = this.props;
        return (
            
             <div className="container">
             <div className="card card-body bg-light mb-3">
                 <div className="row">
                     <div className="col-2">
                         <span className="mx-auto"><b>Customer Identifier:</b>{customer.identifier}</span>
                     </div>
                     <div className="col-lg-6 col-md-4 col-8">
                         <h2>Customer Details</h2>
                         <p><b>Customer Name:</b>{customer.name}</p>
                         <p><b>Customer Email id:</b>{customer.email}</p>
                         <p><b>Customer Phone No:</b>{customer.phone}</p>
                         <p><b>Address LineOne:</b>{customer.addressLineOne}</p> 
                         <p><b>Address LineTwo:</b>{customer.addressLineTwo}</p> 
                         <p><b>City:</b>{customer.city}</p> 
                         <p><b>State:</b>{customer.lState}</p> 
                         <p><b>Country:</b>{customer.country}</p> 
                         <p><b>Postal Code:</b>{customer.postalCode}</p> 

                        
                     </div>
                     <div className="col-md-4 d-none d-lg-block">
                         <ul className="list-group">
                             
                         <Link to={`/updateCustomer/${customer.identifier}`}>
                                 <li className="list-group-item update">
                                     <i className="fa fa-edit pr-1">Update Customer Info</i>
                                 </li>
                        </Link>
                        <li className="list-group-item delete" 
                                onClick={this.onDeleteClick.bind(this,customer.identifier)}>
                                     <i className="fa fa-minus-circle pr-1">Delete Customer</i>
                                 </li>
                             
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
        
        )
    }
}

CustomerItemComponent.propTypes = {
    deleteCustomer:PropTypes.func.isRequired  
}

export default connect(null,{deleteCustomer})(CustomerItemComponent);