import React from "react";
import { RouteProps } from "react-router";
import { navigate, Redirect } from "@reach/router";

interface Props extends RouteProps {
  component: React.FunctionComponent<any>;
}

export const ProtectedRoute = ({ component: Component, ...rest }: Props) => {
  const auth = false;
  if (!auth) {
    return <Redirect to="/login" noThrow />;
  }
  return <Component {...rest} />;
};
