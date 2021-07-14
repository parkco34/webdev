import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from '../Images/ucc-logo.png';
import NavigationBar from './NavigationBar';

function App() {
    return (
        <div className="App">
            <Router>
                <NavigationBar Color="black"/>
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/about" exact component={() => <About />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;


