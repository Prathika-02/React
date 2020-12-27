import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createOrder } from '../../actions/OrderAction';

class AddProductOrder extends Component {
    constructor(props){
        super(props);
        this.state={
            id:"",
           orderId:"",
           totalAmount:"",
           orderStatus:""

        }
    }
    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        //event.preventDefault();
        const newOrder= {
            id:this.id,
            orderId:this.state.orderId,
            totalAmount:this.state.totalAmount,
           orderStatus:this.state.orderStatus
          
        }
       // console.log(newCustomer);
        this.props.createOrder(newOrder,this.props.history);
        
    }
    render() {
        return (
            <div className="orders" id="nandhini1">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Add Product Order</h5>
                        <hr />
                        
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Order Id" 
                                    name="orderId" 
                                    onChange={this.onChange}
                                    value={this.state.id}/>
                            </div>
                            <div className="form-group">
                                
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Order Id" 
                                    name="orderId" 
                                    onChange={this.onChange}
                                    value={this.state.orderId}/>
                            </div>
                            <div className="form-group">
                               
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Total Amount" 
                                    name="totalAmount" 
                                    onChange={this.onChange}
                                    value={this.state.totalAmount}/>
                            </div>
                            <div className="form-group">
                            <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Order Status" 
                                    name="orderStatus" 
                                    onChange={this.onChange}
                                    value={this.state.orderStatus}/>
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
AddProductOrder.propTypes = {
    createOrder:PropTypes.func.isRequired
}

export default connect(null,{createOrder})(AddProductOrder);