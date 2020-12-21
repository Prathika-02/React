import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCustomer } from '../../actions/CustomerAction';

class AddCustomer extends Component {
    constructor(props){
        super(props);
        this.state={
            identifier:"",
            name:"",
            email:"",
            phone:"",
            errors:{}

        }
    }
    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        const newCustomer= {
            identifier:this.state.identifier,
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
          
        }
       // console.log(newCustomer);
        this.props.createCustomer(newCustomer,this.props.history);
        
    }
    render() {
        return (
            <div className="customer">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create Customer form</h5>
                        <hr />
                        
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Customer Identifier" 
                                    name="identifier" 
                                    onChange={this.onChange}
                                    value={this.state.identifier}/>
                            </div>
                            <div className="form-group">
                               
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Customer Name" 
                                    name="name" 
                                    onChange={this.onChange}
                                    value={this.state.name}/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Email id" 
                                    name="email" 
                                    onChange={this.onChange}
                                    value={this.state.email}/>
                            </div>
                            <div className="form-group">
                            <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Phone No" 
                                    name="phone" 
                                    onChange={this.onChange}
                                    value={this.state.phone}/>
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
AddCustomer.propTypes = {
    createCustomer:PropTypes.func.isRequired
}

export default connect(null,{createCustomer})(AddCustomer);