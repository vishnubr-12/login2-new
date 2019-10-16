import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './component/Loginform/LoginForm';
import { Provider } from 'react-redux';
import store from './Redux/store';

ReactDOM.render( < Provider store = { store } >
    <LoginForm />
    </Provider>,
    document.getElementById('root')
);