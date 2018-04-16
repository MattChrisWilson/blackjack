import React from 'react';
import ReactDOM from 'react-dom';
import { createStore/*, applyMiddleware*/ } from 'redux';
import { Provider } from 'react-redux';
import sessionReducer from './reducers/sessionReducer';
import App from './scenes/Blackjack';

// const store = createStore(sessionReducer, applyMiddleware(thunkMiddleware))
const store = createStore(sessionReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));