import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './vendors/mdi/css/materialdesignicons.min.css';
import './vendors/base/vendor.bundle.base.css';
import './vendors/datatables.net-bs4/dataTables.bootstrap4.css';
import './css/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
