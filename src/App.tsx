import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import {AdminRouter} from "./router/AdminRouter";

function App() {
  return (
   <Switch>
     <Route path='/admin' component={AdminRouter}/>
   </Switch>
  );
}

export default App;
