import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCustomer } from '../../actions/CustomerAction';
import classnames from "classnames";
class AddCustomer extends Component {

    constructor(props){
        super(props);
        this.state={
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
            isFormValid: true,
            error:{
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
    }

    componentWillReceiveProps(nextProps) {
        console.log("--------componentWillReceiveProps : Called----------");
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }

    onChange=(event)=>{
    event.preventDefault();
    const { name, value } = event.target;
    let error = this.state.error;

    switch (name) 
    {
        case 'identifier': 
            error.identifier = 
                value.length === 3
                ? ''
                : 'Identifier must be 3 characters long!';
            break;
        case 'name':
            error.name = 
            value.length === 0
            ? ' Name is required'
            : '';
            break;
        case 'email':
            error.email = 
            value.length === 0
            ? 'email id cannot be blank'
            : '';
            break;
        case 'phone':
            error.phone = 
            value.length === 10
            ? ''
            : 'Phone No must be 10 characters long!';;
            break;
        case 'addressLineOne':
            error.addressLineOne = 
            value===''
            ? 'addressLine cannot be blank'
            :  '';
            break;
        case 'addressLineTwo':
                error.addressLineTwo = 
                value===''
                ? 'addressLine cannot be blank'
                :  '';
                break;
       case 'city':
             error.city = 
            value===''
             ? 'city is required'
             :  '';
             break;
        case 'lState':
            error.lState = 
            value===''
            ? 'state is required'
            :  '';
            break;
        case 'country':
            error.country = 
            value===''
            ? 'country cannot be blank'
            :  '';
            break;
        case 'postalCode':
            error.postalCode = 
            value===''
            ? 'Postal Code is required'
            :  '';
            break;
        default:
        break;
    }

    this.setState({error, [name]: value})
    }

    onBlur = (event) => {
        event.preventDefault();
    const { name, value } = event.target;
    let error = this.state.error;

    switch (name) 
    {
        case 'identifier': 
        console.log(value);
        error.identifier = 
            value.length === 3
            ? ''
            : 'Identifier must be 3 characters long!';
        break;
        case 'name':
            console.log(value);
            error.name = 
            (value.length === 0 || value == '')
            ? ' Name is required'
            : '';
            break;
        case 'email':
            error.email = 
            value.length === 0
            ? 'email id cannot be blank'
            : '';
            break;
        case 'phone':
            error.phone = 
            value.length===10
            ? ''
            : 'Phone No must be 10 characters long!';
            break;
        case 'addressLineOne':
            error.addressLineOne = 
            value===''
            ? 'Address cannot be empty'
            :  '';
            break;

        case 'addressLineTwo':
            error.addressLineTwo = 
            value===''
            ? 'Address cannot be empty'
            :  '';
            break;
            
            case 'city':
            error.city = 
            value===''
            ? 'City is required'
            :  '';
            break;
            case 'lState':
            error.lState = 
            value===''
            ? 'State is required'
            :  '';
            break;
            case 'country':
            error.country = 
            value===''
            ? 'Country cannot be blank'
            :  '';
            break;
            case 'postalCode':
            error.postalCode = 
            value===''
            ? 'Postal Code is required'
            :  '';
            break;

        
        default:
        break;
    }

    this.setState({error})
    }

    // isFormValid = (error) => {
    //     if(error.identifier.length!=0||error.identifier.planName!=0||error.identifier.planDescription!=0||error.identifier.daysValidity!=0||error.identifier.amount!=0){
    //         // this.setState({isFormValid: false})
    //         return false;
    //     }
    //     else return true;
    // }

     onSubmit=(event)=>{
        event.preventDefault();
       // console.log(event)
        // if(this.isFormValid(this.state.error)){
        //     const newRecharge = {
        //         identifier:this.state.identifier,
        //         planName:this.state.planName,
        //         planDescription:this.state.planDescription,
        //         purchasedDate:this.state.purchasedDate,
        //         daysValidity:this.state.daysValidity,
        //         amount:this.state.amount
        //     }
        //   this.props.createRecharge(newRecharge,this.props.history);
        // }
        // else {
        //     this.setState({isFormValid: false})
        // }
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
    render() {
        const {customers}=this.state;
        //var today = new Date().toISOString().split('T')[0];
        return (
            <div className="customer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <h5 className="display-4 text-center">Create Customer form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Customer Identifier" 
                            name="identifier" 
                            value={this.state.identifier}
                            onChange={this.onChange}
                            onBlur={this.onBlur}/>
                        </div>
                        {this.state.error.identifier.length ?
                            <span style={{color:"#FF0000"}}>{this.state.error.identifier}</span>
                            :
                            <span></span>
                        }
                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control form-control-lg "
                            placeholder="Customer Name" 
                            name="name" 
                            value={this.state.name}
                            onChange={this.onChange}
                            onBlur={this.onBlur} /> 
                        </div>
                        {this.state.error.name.length ?
                            <span style={{color:"#FF0000"}}>{this.state.error.name}</span>
                            :
                            <span></span>
                        }   
                           
                            <div className="form-group">
                                <input 
                                type="text" className="form-control mb-2 mr-sm-2"
                                    className="form-control form-control-lg"
                                    placeholder="Email id" 
                                    name="email" 
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    onBlur={this.onBlur}/>
                                </div>
                                {this.state.error.email.length ?
                            <span style={{color:"#FF0000"}}>{this.state.error.email}</span>
                            :
                            <span></span>
                        }   

                                
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Phone No" 
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.onChange}
                                    
                                />
                                </div>
                                {this.state.error.phone.length ?
                            <span style={{color:"#FF0000"}}>{this.state.error.phone}</span>
                            :
                            <span></span>
                        }   
                                   
                            

                            
                            <div className="form-group">
                                  <input 
                                    className="form-control form-control-lg" 
                                    placeholder="Address Line One" 
                                    name="addressLineOne" 
                                    onChange={this.onChange}
                                    value={this.state.addressLineOne}
                                
                                    onBlur={this.onBlur}/> 
                                    </div>
                                    {this.state.error.addressLineOne.length ?
                            <span style={{color:"#FF0000"}}>{this.state.error.addressLineOne}</span>
                            :
                            <span></span>
                        }   
                            

                            <div className="form-group">
                                <input 
                                    className="form-control form-control-lg" 
                                    placeholder="Address Line Two" 
                                    name="addressLineTwo" 
                                    onChange={this.onChange}
                                    value={this.state.addressLineTwo}
                            
                                    onBlur={this.onBlur}
                                />
                                </div>
                                {this.state.error.addressLineTwo.length?
                            <span style={{color:"#FF0000"}}>{this.state.error.addressLineTwo}</span>
                            :
                            <span></span>
                        }   
                                
                                   
                            

                            <div className="form-group">
                            <input 
                                type="text" className="form-control mb-2 mr-sm-2"
                                    className="form-control form-control-lg"
                                    placeholder="City" 
                                    name="city" 
                                    value={this.state.city}
                                    onChange={this.onChange}
                                    onBlur={this.onBlur}/>
                                </div>
                                {this.state.error.city.length ?
                            <span style={{color:"#FF0000"}}>{this.state.error.city}</span>
                            :
                            <span></span>
                        }   

                                
                            

                            <div className="form-group">
                            <input 
                                type="text" className="form-control mb-2 mr-sm-2"
                                    className="form-control form-control-lg"
                                    placeholder="State" 
                                    name="lState" 
                                    value={this.state.lState}
                                    onChange={this.onChange}
                                    onBlur={this.onBlur}/>
                                </div>
                                {this.state.error.lState.length ?
                            <span style={{color:"#FF0000"}}>{this.state.error.lState}</span>
                            :
                            <span></span>
                        }   

                                
                            
                            <div className="form-group">
                            <input 
                                type="text" className="form-control mb-2 mr-sm-2"  
                                    className="form-control form-control-lg"
                                    placeholder="Country" 
                                    name="country" 
                                    value={this.state.country}
                                    onChange={this.onChange}
                                    onBlur={this.onBlur}/>
                                </div>
                                {this.state.error.country.length ?
                            <span style={{color:"#FF0000"}}>{this.state.error.country}</span>
                            :
                            <span></span>
                        }   

                                
                            
                            <div className="form-group">
                            <input 
                                type="text" className="form-control mb-2 mr-sm-2" 
                                    className="form-control form-control-lg"
                                    placeholder="Postal Code" 
                                    name="postalCode" 
                                    value={this.state.postalCode}
                                    onChange={this.onChange}
                                    onBlur={this.onBlur}/>
                                </div>
                                {this.state.error.postalCode.length ?
                            <span style={{color:"#FF0000"}}>{this.state.error.postalCode}</span>
                            :
                            <span></span>
                        }   

                                
                            
                            
    
    
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
    createCustomer:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps,{createCustomer})(AddCustomer);