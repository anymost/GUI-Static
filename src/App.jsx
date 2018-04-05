import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import Nav from '../src/components/Nav';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav/>

            </div>
        );
    }
}

const Wrap = () => {
    return <HashRouter>
        <App/>
    </HashRouter>

};

export default Wrap;
