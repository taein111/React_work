import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Accommodate from './ch07/Accommodate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> //함수 이중호출
    <Accommodate />
  // </React.StrictMode>
);

reportWebVitals();
