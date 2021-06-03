import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'



function App() {
    const [counter, setCounter] = useState(0)
    const kgInput = useRef(0)
    const cmInput = useRef(0)

    function clickHandler(e) {
        setCounter(kgInput.current.value/(cmInput.current.value*cmInput.current.value))


    }

    function minusclickHandler() {
        setCounter(counter - 1)
    }

    function resetButton() {
        setCounter(0)
    }

    function setButtononValue() {
        setCounter()
    }
    function changeBMI(e) {
        let kgv=e.target.value
        if (!isNaN(kgv)) {

        }
        return 'isNAN';
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="forKg">
                    <Form.Label>Ihr Gewicht (kg)</Form.Label>
                    <Form.Control type="text" placeholder="kg" ref={kgInput}></Form.Control>
                </Form.Group>
                <Form.Group controlId="forM">
                    <Form.Label>Ihre Grösse (m)</Form.Label>
                    <Form.Control type="text" placeholder="M" ref={cmInput}></Form.Control>
                </Form.Group>
                <Button onClick={clickHandler}>
                    Submit
                </Button>
            </Form>
            <br/>
            {counter}
        </div>
    );
}

export default App;
