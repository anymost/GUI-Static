import React, { Component } from 'react';
import styled from 'styled-components';
import { HashRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Program from './views/Program';
import Setting from './views/Setting';
import 'normalize.css';
import './static/css/common.css';
import 'antd/dist/antd.css'

const AppWrap = styled.div`
    display: flex;
`;

const ViewWrap = styled.div`
    flex: 1;
`;

class App extends Component {
    render() {
        return (
            <AppWrap>
                <Nav/>
                <ViewWrap>
                    <Route path="/" component={Program} exact/>
                    <Route path="/setting" component={Setting}/>
                </ViewWrap>
            </AppWrap>
        );
    }
}

const Wrap = () => {
    return <HashRouter>
        <App/>
    </HashRouter>

};

export default Wrap;
