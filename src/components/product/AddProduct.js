import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProduct } from '../../actions/ProductAction';
class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            price:"",
            image:"",
            createDate:"",
            productType:"",
        }
        //this.onChange=this.onChange.bind(this);
    }

    onChange=(event)=>{
       this.setState(
           {[event.target.name]:event.target.value}
       );
    }

    onSubmit=(event)=>{
        event.preventDefault();
        if(this.state.name===""||this.state.price===""||this.state.image===""||this.state.createDate===""){
            alert("Value cannot be blank");
        }
        else
        {
        const newProduct = {
            name:this.state.name,
            price:this.state.price,
            image:this.state.image,
            createDate:this.state.createDate,
            productType:this.state.productType
        }

        this.props.createProduct(newProduct,this.props.history);
        this.setState({name:"",price:"",image:"",createDate:"",productType:""});
    }
}
    render() {
        return (
            <div className="product"id="shivani1">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create Product form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="name" 
                                    name="name" 
                                    onChange={this.onChange}
                                    value={this.state.name}
                                   />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="price" 
                                    name="price" 
                                    onChange={this.onChange}
                                    value={this.state.price}
                                    />
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="image" 
                                    name="image" 
                                    onChange={this.onChange}
                                    value={this.state.image}
                                    />
                            </div>
                            <h6>Create Date</h6>
                            <div className="form-group">
                                <input 
                                    type="date" 
                                    className="form-control form-control-lg" 
                                    name="createDate" 
                                    onChange={this.onChange}
                                    value={this.state.createDate}/>
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

AddProduct.propTypes = {
    createProduct:PropTypes.func.isRequired
}

export default connect(null,{createProduct})(AddProduct);