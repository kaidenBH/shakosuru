import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId = '178948747185-k7fearg9qhg85rkarvf28hb3pc8lb9pu.apps.googleusercontent.com'>
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>
);
