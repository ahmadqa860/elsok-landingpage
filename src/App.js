import React,{Component} from "react";
import { Switch, Route, Router } from "react-router-dom";
import { ProtectedRoute } from "./protectedRoute";
import { createBrowserHistory } from "history";

import AddUser from './components/user/add-user';
import AddNewProduct from "./components/seller/add-product";
import ThankYouPage from "./components/thankYou";

import SubmitData from './components/submitData';
import Navbar from "./components/utils/navbar";
import Footer from "./components/utils/footer";
import Header from "./components/utils/header";
import MiddleSection from "./components/utils/middleSection";
import Service from "./components/utils/service";
import CategoryList from "./components/utils/categoryList";

import "./components/js/script";

class App extends Component {

  
  render(){
    const history = createBrowserHistory();
    return (
      <React.Fragment>
        <Navbar/>
        <Header />
        <MiddleSection />
        <Service />
        <CategoryList />
        
        <Switch>
        <Router history={history}>
          <Route path="/" exact component={SubmitData} />
          <ProtectedRoute path="/add-user" component={AddUser} />
          <ProtectedRoute
            path="/add-product"
            component={AddNewProduct}
          />
          <ProtectedRoute
            path="/thank-you"
            component={ThankYouPage}
          />
        </Router>
        </Switch>
        
        <Footer/>
      </React.Fragment>
    );
  };
}
export default App;
