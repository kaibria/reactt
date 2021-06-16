import logo from './logo.svg';
import './App.css';
import React, {useRef, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import SbbAPI from "./SbbAPI";
import TwoLists from "./TwoLists";
import Deckofcard from "./Deckofcard";
import FormbootstrapBeispiel from "./FormbootstrapBeispiel";
import { Route, Switch } from "react-router-dom";
import GridBootstrap from "./GridBootstrap";
import Stationboard from "./Stationboard";




function App() {

    return (
            <Switch>
                <Route exact path="/" component={SbbAPI}/>
                <Route path="/stationboard" component={Stationboard}/>
                <Route path="/reise" component={SbbAPI}/>
                <Route path="/takemehome" component={SbbAPI}/>
            </Switch>

    );
}

export default App;
