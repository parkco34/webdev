import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Join from '../pages/Join';
import NoMatch from '../pages/NoMatch';
import MainContent from './MainContent';
import Background from './Background';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/join" component={ Join } />
                    <Route component={ NoMatch } />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
