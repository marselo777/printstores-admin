import React from "react";
import { Redirect, RouteComponentProps } from "@reach/router";

interface Props extends RouteComponentProps {
  component?: React.FunctionComponent<any>;
  children: React.ReactNode;
}

export const ProtectedRoute = ({ component: Component, children, ...rest }: Props) => {
  const auth = true;
  if (!auth) {
    return <Redirect to="/login" noThrow />;
  }
  return <>{children}</>;
};
