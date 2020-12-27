import React from 'react'
import CustomerItemComponent from './CustomerItemComponent';
import CreateCustomerButton from './customers/CreateCustomerButton';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCustomers } from '../actions/CustomerAction';

class Customer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            customers:[]
        }
    }
    componentDidMount(){
        this.props.getCustomers();
    }
    render() {
        const {customers} =  this.props.customers;

        return (
            <div className="Customers" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="display-4 text-center">Customer Information</h4>
                        <br />
                        
                        <CreateCustomerButton/>
                        <br />
                        <hr />
    
                        {
                                customers.map((customer)=>{
                                    return  <CustomerItemComponent key={customer.identifier} customer={customer}/>
                                })
                            }
                            
            

    
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
Customer.propTypes={
    getCustomers:PropTypes.func.isRequired

}

const mapStateToProps=(state)=>({ 
    customers:state.customers
});
export default connect(mapStateToProps,{getCustomers})(Customer);