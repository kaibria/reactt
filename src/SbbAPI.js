import logo from './logo.svg';
import './style.css';
import {useRef, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";



function SbbAPI() {
    let [toStation, setToStation] = useState([])
    let [standort, setStandort] = useState([])
    let [verbindungen, setVerbindungen] = useState([])
    const search = () => {
        fetch('http://transport.opendata.ch/v1/connections?from='+standort+'r&to='+toStation)
            .then(response => response.json())
            .then(data => setVerbindungen(data.connections))
    }

    return (
        <div>
            <Form>
                Standort:
                <br/>
                <input type="text"
                       value={ standort }
                       onChange={ e => setStandort (e.target.value) } />
                       <br/>
                Zielort:
                <br/>
                <input type="text"
                       value={ toStation }
                       onChange={ e => setToStation (e.target.value) } />
                       <br/>
                       <br/>


                <Button onClick={ search }>suche</Button>
                <ul>{verbindungen.map((con, idx) =>
                    <ListGroup key={idx} class="listGroup">
                        <ListGroupItem class="listItem">Abfahrtsort: {con.from.station.name}</ListGroupItem>
                        <ListGroupItem>Gleis: {con.from.platform}</ListGroupItem>
                        <ListGroupItem>Zielort: {con.to.station.name}</ListGroupItem>
                        <ListGroupItem>――――――――――――――</ListGroupItem>

                    </ListGroup>)
                }
                </ul>

            </Form>
        </div>
    );
}

export default SbbAPI;
