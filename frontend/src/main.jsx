import React from 'react'
//import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client" ;
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom' ;
import { AuthContextProvider } from './context/AuthContext.jsx';
import { SocketContextProvider } from './context/SocketContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
       <SocketContextProvider>
        <App/>
       </SocketContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  
  </React.StrictMode>,
)
