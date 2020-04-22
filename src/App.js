import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
