import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewProductPage from './pages/newProduct/newProduct'
import Header from './components/header/header';

import './App.css';;
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* <Route exact path='/' component={} /> */}
        <Route exact path='/addproduct' component={NewProductPage} />
        {/* <Route exact path='/:id' component={} /> */}
      </Switch>
    </div>
  );
}

export default App;
