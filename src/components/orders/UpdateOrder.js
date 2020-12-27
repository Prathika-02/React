import React, { Component } from 'react'
import {getOrder,createOrder} from '../../actions/OrderAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from 'axios';
 class UpdateOrder extends Component {

    constructor(props){
        super(props);
    
        this.state=  {
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
        event.preventDefault();
        const newOrder = {
            orderId:this.state.orderId,
            totalAmount:this.state.totalAmount,
           orderStatus:this.state.orderStatus
        }

        this.props.createOrder(newOrder,this.props.history);

    }

    componentDidMount(){
    //    const {orderId} = this.props.match.params;
    //    this.props.getOrder(orderId,this.props.history);
     axios.get(`http://localhost:8081/productorders/${this.orderId}`).then(g=>this.setState({order:g.data}));
      
    }

    componentWillReceiveProps(nextProps){
        const {
           orderId,
           totalAmount,
           orderStatus 
        }=nextProps.order;

        this.setState({
            orderId,
           totalAmount,
           orderStatus 
        });
    }
    render() {
       
        return (
            <div className="recharge">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Edit Order</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder=" ID"
                                        name="id"
                                        value={this.state.id}
                                        disabled />
                                </div>
                            <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Order ID"
                                        name="orderId"
                                        value={this.state.orderId}
                                        disabled />
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

UpdateOrder.propTypes = {
    getOrder:PropTypes.func.isRequired,
   createOrder:PropTypes.func.isRequired,
   order:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
   order:state.order
  });

export default connect(mapStateToProps,{getOrder,createOrder})(UpdateOrder);