import React from 'react';
import Header from './Header/Header';
import './App.css';

const App = () => {
    return (
        <div id="App">
            <section id="navbar-container">
                <React.Fragment>
                    <Header />
                </React.Fragment>
            </section>
        </div>
    );
};

export default App;
