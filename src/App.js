import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Preview from './Preview';
import WebcamCapture from './WebcamCapture';

function App() {
  return (
    <div className="app">
      <Router>
            <div className="app__body">
              <div className="app__bodyBackground">
                <Switch>
                <Route path="/preview">
                    <Preview />
                  </Route>
                  <Route exact path="/">
                    <WebcamCapture />
                  </Route>
                </Switch>
              </div>
            </div>
      </Router>
    </div>
  );
}

export default App;
