
import './App.css';
import HeaderComponent from './layout/HeaderComponent';
import FooterComponent from './layout/FooterComponent'
import Customer from './components/Customer';
import Product from './components/Product';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddCustomer from './components/customers/AddCustomer';
import UpdateCustomer from './components/customers/UpdateCustomer';
import AddProduct from './components/product/AddProduct';
import UpdateProduct from './components/product/UpdateProduct';
import AddPayment from './components/payments/AddPayment';
import UpdatePayment from './components/payments/UpdatePayment';
import AddProductOrder from './components/orders/AddProductOrder';
import UpdateOrder from './components/orders/UpdateOrder';
import ProductOrder from './components/ProductOrder';
import { Provider } from 'react-redux';
import store from './store';
import React,{Component} from 'react';

function App() {
  return (

      <Provider store={store}>
      <Router>
      <HeaderComponent/>
      <div
        class="bg_image"
      >
      </div>
      <Route exact path="/customer" component={Customer}/>
      <Route exact path="/addCustomer" component={AddCustomer}/>
      <Route exact path="/updateCustomer/:identifier" component={UpdateCustomer}/>
      <Route exact path="/product" component={Product}/>
      <Route exact path="/addProduct" component={AddProduct}/>
      <Route exact path="/updateProduct/:productId" component={UpdateProduct}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/addPayment" component={AddPayment}/>
      <Route exact path="/updatePayment/:id" component={UpdatePayment}/>
      <Route exact path="/productOrder" component={ProductOrder}/>
      <Route exact path="/addProductOrder" component={AddProductOrder}/>
      <Route exact path="/updateOrder/:orderId" component={UpdateOrder}/>

      </Router>
      </Provider>
  );
}

export default App;
