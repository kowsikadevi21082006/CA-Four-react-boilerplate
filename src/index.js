import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Context from './components/Context';

ReactDOM.render(
  <div>
    <Context>
    <App />
    </Context>
  </div>,
  document.getElementById('root')
);