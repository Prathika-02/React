import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProduct,createProduct } from '../../actions/ProductAction';


class UpdateProduct extends Component {

    constructor(props){
        super(props);
        this.state={
            productId: "",
            name:"",
            price:"",
            image:"",
            createDate:""
                        
        }
           }

           onChange=(event)=>{
            this.setState(
                {[event.target.name]:event.target.value}

            );
         }

      

    onSubmit=(event)=>{
        event.preventDefault();
        const newProduct = {
            productId:this.state.productId,
            name:this.state.name,
            price:this.state.price,
            image:this.state.image,
            createDate:this.state.createDate
            
        }
        this.props.createProduct(newProduct,this.props.history);
           }

           componentDidMount(){
            const {productId} = this.props.match.params;
            this.props.getProduct(productId,this.props.history);
           
         }
         
           componentWillReceiveProps(nextProps){
            const {
                productId,
                name,
                price,
                image,
                createDate                   
            }=nextProps.product;
            this.setState({
                productId,
                name,
                price,
                image,
                createDate     
                          
            });
        }


           render() {
        return (
            <div className="product" id="shivani2">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Update Product Details</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Unique Product Id"
                                        name="productId"
                                        value={this.state.productId}
                                        disabled />
                                </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="name" 
                                    name="name" 
                                    value={this.state.name}
                                    onChange={this.onChange}
                                  />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Product price" 
                                    name="price" 
                                    value={this.state.price}
                                    onChange={this.onChange}
                                    
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="image" 
                                    name="image" 
                                    value={this.state.image}
                                    onChange={this.onChange}
                                    
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
UpdateProduct.propTypes = {
    getProduct:PropTypes.func.isRequired,
    createProduct:PropTypes.func.isRequired,
    product:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    product: state.products.product
    
});

export default connect(mapStateToProps,{getProduct,createProduct})(UpdateProduct);


