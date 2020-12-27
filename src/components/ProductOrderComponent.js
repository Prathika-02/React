import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteOrder } from '../actions/OrderAction';


class ProductOrderComponent extends React.Component {
    onDeleteClick=(orderId)=>{
        console.log('--------ProductOrderComponent:onDeleteClick Called--------')
        this.props.deleteOrder(orderId);
        //console.log(id);
       }
    render() {
        const {order} = this.props;
        return (
            
             <div className="container">
             <div className="card card-body bg-light mb-3">
                 <div className="row">
                     <div className="col-2">
                         {/* <span className="mx-auto"><b>Order ID:</b>{order.orderId}</span> */}
                     </div>
                     <div className="col-lg-6 col-md-4 col-8">
                         <h2>Order Details</h2>
                         <p><b> ID: </b>{order.id}</p>
                         <p><b>Order ID: </b>{order.orderId}</p>
                         <p><b>Total Amount: </b>{order.totalAmount}</p>
                         <p><b>Order Status: </b>{order.orderStatus}</p>
                     </div>
                     <div className="col-md-4 d-none d-lg-block">
                         <ul className="list-group">
                             
                         <Link to={`/updateOrder/${order.orderId}`}>
                                 <li className="list-group-item update">
                                     <i className="fa fa-edit pr-1">Update Order Info</i>
                                 </li>
                        </Link>
                        <Link to={`/deleteOrder/${order.orderId}`}>
                        <li className="list-group-item delete" 
                                onClick={this.onDeleteClick.bind(this,order.orderId)}>
                                     <i className="fa fa-minus-circle pr-1">Delete Order</i>
                                 </li>
                             </Link>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
        
        )
    }
}

ProductOrderComponent.propTypes = {
    deleteOrder:PropTypes.func.isRequired  
}

export default connect(null,{deleteOrder})(ProductOrderComponent);