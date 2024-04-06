import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import state, { changeDate, updateNewPostText, subscribe } from './Redux/State.js';
// import state, { subscribe } from './Redux/State.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      {/* <BrowserRouter> */}
      {/* <App state={state} changeDate={changeDate} updateNewPostText={updateNewPostText} /> */}
      <App state={state} />
      {/* </BrowserRouter> */}
    </React.StrictMode>
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();