import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Fib from './Fib';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>Edit <code>src/App.js</code> and save to reload.</p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer">
                            Learn React
                        </a>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </header>
                    <div>
                        <Route exact path="/" component={Fib} />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
