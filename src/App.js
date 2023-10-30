import React from "react";
import {BrowserRouter as Router, Switch, Route }  from  'react-router-dom'

import Header from "./containers/Header";
import ProductComponent from "./containers/ProductComponent"; 
import ProductListiong from "./containers/ProductListiong";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route path='/' exact component ={ProductListiong} />
        <Route path='/product/:productId' component ={ProductDetail} />
        <Route>404 NOT FOUND !!</Route>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
