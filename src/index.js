import React from 'react';
import {createStore} from 'redux';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import reducer from './reducers';
import Form from "./components/containers/Form";
import scss from './stylesheets/main.scss';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <Form />
    </Provider>,
    document.getElementById('root')
);