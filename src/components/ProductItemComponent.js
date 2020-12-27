import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProduct } from '../actions/ProductAction';


class ProductItemComponent extends React.Component {
    onDeleteClick=(productId)=>{
        console.log('--------ProductItemComponent:onDeleteClick Called--------')
        this.props.deleteProduct(productId);
        //console.log(id);
       }
    render() {
        const {product} = this.props;
        return (
            
             <div className="container">
             <div className="card card-body bg-grey mb-3">
                 <div className="row">
                     <div className="col-2">
                         <span className="mx-auto"><b>Product Id:</b>{product.productId}</span>
                     </div>
                     <div className="col-lg-6 col-md-4 col-8">
                         
                         <p><b>Product Name:</b>{product.name}</p>
                         <p><b>Product Price:</b>{product.price}</p>
                         <p><b>Product Image:</b>{product.image}
                         </p>
                     </div>
                     <div className="col-md-4 d-none d-lg-block">
                         <ul className="list-group">
                             
                         <Link to={`/updateProduct/${product.productId}`}>
                                 <li className="list-group-item update">
                                     <i className="fa fa-edit pr-1">Update Product</i>
                                 </li>
                        </Link>
                        <li className="list-group-item delete" 
                                onClick={this.onDeleteClick.bind(this,product.productId)}>
                                     <i className="fa fa-minus-circle pr-1">Delete Product</i>
                                 </li>
                             
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
        
        )
    }
}

ProductItemComponent.propTypes = {
    deleteProduct:PropTypes.func.isRequired  
}

export default connect(null,{deleteProduct})(ProductItemComponent);
