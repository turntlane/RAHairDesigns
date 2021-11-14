import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Components/Home Page/Home';
import Appointments from './Components/Appointments/Appointments';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/appointments' component={Appointments} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
