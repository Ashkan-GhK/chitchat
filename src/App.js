import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Preview from './Preview';
import WebcamCapture from './WebcamCapture';
import { login, logout, selectUser } from "./features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { auth } from "./firebase";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);


  return (
    <div className="app">
      <Router>
      {!user ? (
          <Login />
        ) : (
          <>
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
            </>
        )}  
      </Router>
    </div>
  );
}

export default App;
