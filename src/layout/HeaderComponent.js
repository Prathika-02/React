import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar} from 'react-bootstrap';
class HeaderComponent extends React.Component {
    render() {
        return (
         <div>
          <h1 class="glow">Electronics Purchase store</h1>
            <Navbar class="navbar" expand="lg">
            <Navbar.Brand href="#home"><span class="color-change"> </span> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <div className="links" >
            <Nav className="mr-auto">
              <Nav.Link href="/customer">Customers</Nav.Link>
              <Nav.Link href="/product">Products</Nav.Link>
              <Nav.Link href="/productOrder">Orders</Nav.Link>
              <Nav.Link href="/dashboard">Payment</Nav.Link>
            </Nav>
            
            </div>
            
            
          </Navbar.Collapse>
          </Navbar>
          
          </div>
        );
    }

}

export default HeaderComponent;