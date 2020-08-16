import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Dashboard from './component/pages/Dashboard'
import './App.css';

function App() {
  return (
    <Router> 
      <div className="App">
        <Switch>
            <Route path="/" component={Dashboard}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
