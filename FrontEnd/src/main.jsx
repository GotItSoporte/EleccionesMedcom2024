import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { DataProvider, FunctionsProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <FunctionsProvider>
        <App />
      </FunctionsProvider>
    </DataProvider>
  </React.StrictMode>,
);
