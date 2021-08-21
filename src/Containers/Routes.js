import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";

import { Home } from './Home';
import { Raffles } from './Raffles';

export function Routes() {
	return (
		<Router>
            <Switch>
                <Route path="/raffles">
                    <Raffles />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
	);
}
