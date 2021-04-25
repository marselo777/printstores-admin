import {Redirect, useRouteMatch} from "react-router";
import {Login} from "../containers/Login";
import React from "react";

export const WithAuth = () => {
    const match = useRouteMatch();
    const auth  = false;
    return auth ? <Redirect to={match.path}/>: <Redirect to={'admin/login'}/>

}