import logo from './logo.svg';
import './App.css';
import React, {useRef, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Bootstrap() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>Produkt</Col>
                    <Col>Preis</Col>
                    <Col>Speicherplatz</Col>
                </Row>
                <Row>
                    <Col>Iphone X</Col>
                    <Col>900 Fr.</Col>
                    <Col>64 GB</Col>
                </Row>
                <Row>
                    <Col>Iphone 11</Col>
                    <Col>1000 Fr.</Col>
                    <Col>64 GB</Col>
                </Row>
                <Row>
                    <Col>Iphone 12</Col>
                    <Col>1200 Fr.</Col>
                    <Col>128 GB</Col>
                </Row>
            </Container>
            
        </div>


    );
}

export default Bootstrap;
