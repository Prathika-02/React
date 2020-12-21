import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar} from 'react-bootstrap';
class HeaderComponent extends React.Component {
    render() {
        return (
          
            <Navbar class="navbar" expand="lg">
            <Navbar.Brand href="#home"><span class="color-change">Electronics Purchase </span> Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <div className="links">
            <Nav className="mr-auto">
              <Nav.Link href="/customer">Customers</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <Nav.Link href="#link">Orders</Nav.Link>
            </Nav>
            
            </div>
            
            
          </Navbar.Collapse>
          </Navbar>
          
        );
    }

}

export default HeaderComponent;