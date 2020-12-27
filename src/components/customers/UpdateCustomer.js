import React, { Component } from 'react'
import {getCustomer,createCustomer} from '../../actions/CustomerAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
 class UpdateCustomer extends Component {

    constructor(props){
        super(props);
        this.state=  {
            identifier:"",
            name:"",
            email:"",
            phone:"",
            addressLineOne:"",
            addressLineTwo:"",
            city:"",
            lState:"",
            country:"",
            postalCode:"",               
        }
    }

    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }

     onSubmit=(event)=>{
        event.preventDefault();
        const newCustomer = {
            identifier:this.state.identifier,
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            addressLineOne:this.state.addressLineOne,
            addressLineTwo:this.state.addressLineTwo,
            city:this.state.city,
            lState:this.state.lState,
            country:this.state.country,
            postalCode:this.state.postalCode,
        }

        this.props.createCustomer(newCustomer,this.props.history);

    }

    componentDidMount(){
       const {identifier} = this.props.match.params;
       this.props.getCustomer(identifier,this.props.history);
      
    }

    componentWillReceiveProps(nextProps){
        const {
            id,
            identifier,
            name,
            email,
            phone,
            addressLineOne,
            addressLineTwo,
            city,
            lState,
            country,
            postalCode,        
        }=nextProps.customer;

        this.setState({
            id,
            identifier,
            name,
            email,
            phone,
            addressLineOne,
            addressLineTwo,
            city,
            lState,
            country,
            postalCode,  
                         
        });
    }
    render() {
       
        return (
            <div className="customer" id="home2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Edit Customer form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>

                            <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Customer Identifier"
                                        name="identifier"
                                        value={this.state.identifier}
                                        disabled />
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
                                    <textarea 
                                    className="form-control form-control-lg" 
                                    name="email"
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    placeholder="Customer Email id"></textarea>
                                </div>


                                <div className="form-group">
                                    <textarea 
                                    className="form-control form-control-lg" 
                                    name="phone"
                                    onChange={this.onChange}
                                    value={this.state.phone}
                                    placeholder="Customer Phone No"></textarea>
                                </div>

                                <div className="form-group">
                                    <textarea 
                                    className="form-control form-control-lg" 
                                    name="addressLineOne"
                                    onChange={this.onChange}
                                    value={this.state.addressLineOne}
                                    placeholder="Address 1"></textarea>
                                </div>
                                
                                <div className="form-group">
                                    <textarea 
                                    className="form-control form-control-lg" 
                                    name="addressLineTwo"
                                    onChange={this.onChange}
                                    value={this.state.addressLineTwo}
                                    placeholder="Address 2"></textarea>
                                </div>

                                <div className="form-group">
                                    <textarea 
                                    className="form-control form-control-lg" 
                                    name="city"
                                    onChange={this.onChange}
                                    value={this.state.city}
                                    placeholder="City"></textarea>
                                </div>

                                <div className="form-group">
                                    <textarea 
                                    className="form-control form-control-lg" 
                                    name="lState"
                                    onChange={this.onChange}
                                    value={this.state.lState}
                                    placeholder="State"></textarea>
                                </div>

                                <div className="form-group">
                                    <textarea 
                                    className="form-control form-control-lg" 
                                    name="country"
                                    onChange={this.onChange}
                                    value={this.state.country}
                                    placeholder="Country"></textarea>
                                </div>

                                <div className="form-group">
                                    <textarea 
                                    className="form-control form-control-lg" 
                                    name="postalCode"
                                    onChange={this.onChange}
                                    value={this.state.postalCode}
                                    placeholder="Postal Code"></textarea>
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

UpdateCustomer.propTypes = {
    getCustomer:PropTypes.func.isRequired,
    createCustomer:PropTypes.func.isRequired,
   customer:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    customer: state.customers.customer
  });

export default connect(mapStateToProps,{getCustomer,createCustomer})(UpdateCustomer);