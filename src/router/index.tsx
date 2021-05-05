import React from "react";
import { Router } from "@reach/router";
import { LoginRoute } from "./LoginRoute/LoginRoute";

export const Routes = () => {
  return (
    <Router>
      <LoginRoute path="/login" />
    </Router>
  );
};
