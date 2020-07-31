import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Home from './component/pages/Home'
import './App.css';

function App() {
  return (
    <Router> 
      <div className="App">
        <Switch>
            <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
