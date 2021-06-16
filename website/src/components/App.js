import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Join from '../pages/Join';
import Goal from '../pages/Goal';
import NoMatch from '../pages/NoMatch';
import Store from '../pages/Store';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/join" component={ Join } />l
					<Route exact path="/goal" component={ Goal } />
					<Route exact path="/store" component={ Store } />
                    <Route component={ NoMatch } />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
