import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { createStore/*, applyMiddleware*/ } from 'redux';
import { Provider } from 'react-redux';
import sessionReducer from './reducers/sessionReducer';
import App from './containers/blackjack';

const store = createStore(sessionReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));