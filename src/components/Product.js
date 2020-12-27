import React from 'react'
import ProductItemComponent from './ProductItemComponent';
import AddProductButton from './product/AddProductButton';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from '../actions/ProductAction';

class Product extends React.Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        this.props.getProducts();
    }
    render() {
        const {products} =  this.props.products;

        return (
            <div className="Products" id="shivani">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="display-4 text-center ">Product List</h5>
                        <br />
                        <AddProductButton/>
                        <br />
                        <hr />
                        {
                         products.map((product)=>{
                         return  <ProductItemComponent key={product.name} product={product}/>
                          })
                     }
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
Product.propTypes={
    getProducts:PropTypes.func.isRequired

}

const mapStateToProps=(state)=>({ 
    products:state.products
});
export default connect(mapStateToProps,{getProducts})(Product);