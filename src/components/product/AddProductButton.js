import React  from 'react';
import {Link} from 'react-router-dom';
const AddProductButton = () =>{
    return(

        <React.Fragment>
            <Link to="/addProduct" className="btn btn-lg btn-info">
                Create Product
            </Link>
        </React.Fragment>        
    );
}

export default AddProductButton;