import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './index-redux';

const store = createStore(reducer);
// store.dispatch({
//     type: 'ADD',
//     title:'sdsd',
//     singer: 'wss'
// })
console.log(store.getState(),'store');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
