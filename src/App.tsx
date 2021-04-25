import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Redirect, Route, Switch} from "react-router";
import {AdminRouter} from "./router/AdminRouter";
import {ProtectedRoute} from "./components/ProtectedRoute";
import {Login} from "./containers/Login";

function App() {
  return (
   <Switch>
       <ProtectedRoute path='/admin' component={AdminRouter}/>
       <Route path='/login' component={Login}/>
       <Redirect to='/admin'/>
   </Switch>
  );
}

export default App;
