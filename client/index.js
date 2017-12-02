import React from "react";
import ReactDOM from "react-dom";
// import AppContainer from './components/appContainer';
import routes from "../client/routes/routes";
import { BrowserRouter as Router, Route, HashRouter} from 'react-router-dom'

console.log(routes);
// ReactDOM.render(<AppContainer/>, document.getElementById('app'));

ReactDOM.render((
    <Router>
        <div>
            {routes.map((route, i) => (
                <Route key={i} path={route.path} render={props => (
                    <route.component {...props} routes={route.routes} />
                )} />
            ))}
        </div>
    </Router>
), document.getElementById('app'));

//https://github.com/ReactTraining/react-router/blob/v4.1.1/FAQ.md#why-doesnt-my-application-render-after-refreshing