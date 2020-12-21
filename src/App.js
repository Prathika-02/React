
import './App.css';
import HeaderComponent from './layout/HeaderComponent';
import FooterComponent from './layout/FooterComponent'
import Customer from './components/Customer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddCustomer from './components/customers/AddCustomer';
import UpdateCustomer from './components/customers/UpdateCustomer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (

      <Provider store={store}>
      <Router>
      <HeaderComponent/>
      <FooterComponent/>
      <Route exact path="/customer" component={Customer}/>
      <Route exact path="/addCustomer" component={AddCustomer}/>
      <Route exact path="/updateCustomer/:identifier" component={UpdateCustomer}/>
      </Router>
      </Provider>
  );
}

export default App;
