import {Component} from "react";
import React from "react";
import {Redirect, Route, RouteComponentProps, RouteProps} from "react-router";
import { Login } from "../containers/Login";

interface Props extends  RouteProps{
    component: React.FunctionComponent<any>,

}

export const ProtectedRoute = ({component:Component, ...rest}:Props) => {
    const auth = false;
    return (<Route
                {...rest}
                render={(props) => {

                        if(auth) {
                            return <Component {...props}/>}

                    return <Redirect to='/login'/>
                }

                }
         />)

}