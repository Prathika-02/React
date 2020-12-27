import React from 'react'
import ProductOrderComponent from './ProductOrderComponent';
import CreateOrderButton from './orders/CreateOrderButton';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getOrders } from '../actions/OrderAction';
import axios from 'axios';

class ProductOrder extends React.Component {
    constructor(props){
        super(props);
        this.state={
            orders:[]
        }
    }
    componentDidMount(){
//         this.props.getOrders();
//         this.setState({
// orders:this.props.getOrders()
//         })
axios.get("http://localhost:8080/productorders/all").then(g=>this.setState({orders:g.data}));
        
    }
    render() {
        // const {orders} =  this.props.orders;

        return (
            <div className="orders" id="nandhini">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="display-4 text-center">Order Information</h4>
                        <br />
                        
                        <CreateOrderButton/>
                        <br />
                        <hr />
    
                        {
                                this.state.orders.map((order)=>{
                                    return  <ProductOrderComponent key={order.orderId} order={order}/>
                                })
                            }
                            
            

    
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
ProductOrderComponent.propTypes={
    getOrders:PropTypes.func.isRequired

}

const mapStateToProps=(state)=>({ 
    orders:state.orders
});
export default connect(mapStateToProps,{getOrders})(ProductOrder);