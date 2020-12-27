import React  from 'react';
import {Link} from 'react-router-dom';
const CreateOrderButton = () =>{
    return(

        <React.Fragment>
        <Link to="/addProductOrder" className="btn btn-lg btn-info">
                Create Order
            </Link>
        </React.Fragment>
    );
}
export default CreateOrderButton;