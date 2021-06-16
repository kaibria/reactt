import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./Post";
import RadioButton from "./RadioButtons";
import Checkboxes from "./Checkboxes";
import Listen from "./Listen";
import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from "./Bootstrap";
import FormbootstrapBeispiel from "./FormbootstrapBeispiel";
import GridBootstrap from "./GridBootstrap";
import TwoLists from "./TwoLists";
import API from "./API";
import Deckofcard from "./Deckofcard";
import SbbAPI from "./SbbAPI";
import Stationboard from "./Stationboard";
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />

      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
