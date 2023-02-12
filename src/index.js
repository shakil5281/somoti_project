import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import {router} from './router/router'
import { Provider } from 'react-redux';
import {store} from './redux/store'
import { SnackbarProvider } from 'notistack';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <RouterProvider  router={router}/>
    </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);


