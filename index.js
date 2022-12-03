import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewDiv from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <App/>,
  document.getElementById("root"),
);

/*ReactDOM.render(
  <NewDiv/>,
document.getElementById("new")
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
