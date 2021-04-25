import {Redirect, Route, Switch, useRouteMatch} from "react-router";
import {Login} from "../containers/Login";


export const AdminRouter = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/users`}>
                <div>Users</div>
            </Route>
            <Route path={`${match.path}/dashboard`}>
                <div>Дашбоард</div>
            </Route>
            <Redirect to='/admin/dashboard'/>
        </Switch>
    )
}