import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider} from "@apollo/client";
import { Config } from './config';


const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  
<BrowserRouter>
  <ApolloProvider client={Config.ApolloClient}>
    <App/>
  </ApolloProvider>
  </BrowserRouter>
);
reportWebVitals();
