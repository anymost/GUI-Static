import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { GLOBAL_RENDERER } from './constant';
import registerServiceWorker from './registerServiceWorker';
import { showMessage } from './store/actions/message';
import './index.css';
const { handleMessage, handleError } = window.require(GLOBAL_RENDERER);
handleMessage(message => {
    showMessage(message);
});
handleError(message => {
    showMessage(message);
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
