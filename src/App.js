import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewProductPage from './pages/newProduct/newProduct';
import SingleProduct from './pages/singleProduct/singleProduct';
import AllProducts from './pages/allProducts/allProducts';
import Header from './components/header/header';

import './App.css';;
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={AllProducts} />
        <Route exact path='/addproduct' component={NewProductPage} />
        <Route exact path='/:id/show' component={SingleProduct} />
      </Switch>
    </div>
  );
}

export default App;
