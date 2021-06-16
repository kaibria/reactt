import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";

import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function TwoLists() {
    let data = ['Ducati Monster 120s', 'Yamaha MT-01', 'KTM Superduke 1200']
    let data2 = []
    let [datalistleft, setdataListleft] = useState(data)
    let [datalistright, setdataListright] = useState(data2)
    let allright = '<<'

    let x = document.getElementsByClassName("list-group-item");

    data.selected = function hallo() {
        console.log(this);

    }


    function changeAlltoright() {
        setdataListright(datalistright.concat(datalistleft))
        setdataListleft([])

    }

    function changeAlltoleft() {
        setdataListleft(datalistleft.concat(datalistright))
        setdataListright([])
    }
    function changeOnetoRight(){

    }

    return (
        <div>
            <Form>
                <Row>
                    <ListGroup as="ul" as={Col}>
                        {datalistleft.map((fahrzeuge, idx) =>
                            <ListGroup.Item action href={"#"+fahrzeuge} as="li" key={idx}
                                            class="list-group-item" onClick={console.log("hallo")}>{datalistleft[idx]}</ListGroup.Item>)
                        }
                    </ListGroup>

                    <ButtonGroup vertical as={Col}>
                        <Button variant="primary" type="submit" as={Col} onClick={changeAlltoright}>
                            >>
                        </Button>
                        <Button variant="primary" type="submit" as={Col} onClick={changeAlltoleft}>
                            {allright}
                        </Button>
                        <Button variant="primary" type="submit" as={Col} onClick={changeAlltoleft}>
                            >
                        </Button>
                    </ButtonGroup>

                    <ListGroup as="ul" as={Col}>
                        {datalistright.map((fahrzeuge, idx) =>
                            <ListGroup.Item as="li" key={idx}>{datalistright[idx] }</ListGroup.Item>)
                        }

                    </ListGroup>
                </Row>
            </Form>
        </div>

    );
}

export default TwoLists;
