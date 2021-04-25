import {Route, Switch, useRouteMatch} from "react-router";
import {Login} from "../containers/Login";


export const AdminRouter = () => {
    const match = useRouteMatch()
    return (
        <Switch>
            <Route path={`${match.path}/login`} component={Login}/>
        </Switch>
    )
}