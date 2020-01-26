import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NewProductPage from './pages/newProduct/newProduct';
function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path='/' component={} /> */}
        <Route exact path='/newProduct' component={NewProductPage} />
        {/* <Route exact path='/:id' component={} /> */}
      </Switch>
    </div>
  );
}

export default App;
