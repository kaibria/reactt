import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'



function API() {
    let [inputWord, setInputWord] = useState("")
    let [words, setWords] = useState([])
    const btHandler = () => {
        fetch('https://api.datamuse.com/words?rel_rhy='+inputWord)
            .then(response => response.json())
            .then(data => setWords(data))
    }
    return (
        <div>
            <Form>
            <input type="text"
                   value={ inputWord }
                   onChange={ e => setInputWord (e.target.value) } />

            <Button onClick={ btHandler }>Wörter suchen</Button>
            <ul>
                { words.map((word, idx) =>
                    <li key={idx}>{word.word}</li>)

                }
            </ul>
            </Form>
        </div>
    );
}

export default API;
