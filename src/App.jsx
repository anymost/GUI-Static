import React, { Component } from 'react';
import styled from 'styled-components';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store';
import Nav from './components/common/Nav';
import Message from './components/common/Message';
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
                <Message/>
                <ViewWrap>
                    <Route path="/" component={Program} exact/>
                    <Route path="/setting" component={Setting}/>
                </ViewWrap>
            </AppWrap>
        );
    }
}

const Wrap = () => {
    return <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>

};

export default Wrap;
