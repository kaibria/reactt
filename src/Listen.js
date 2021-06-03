import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";

function Listen() {
    const data = [
        { title: 'red', red: 255, green: 0, blue: 0, html: '#FF0000'},
        { title: 'green', red: 0, green: 255, blue: 0 , html: '#00f700'},
        { title: 'blue', red: 0, green: 0, blue: 255 , html: '#000080'}
    ]
    const [colors, setColors] = useState(data);
    const [newColor, setNewColor] = useState()


    function addColor() {
        setColors([...colors,newColor])
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function randomColor() {

    }
    return (
        <div>
            <h1>colors</h1>
            <ul>
                { colors.map((color, idx) =>
                    <li style={{color: color.html}} key={idx}>{color.title}</li>)}
            </ul>
            <input value={newColor} onChange={e => setNewColor(e.target.value)} /><br/>
            <button onClick={addColor}>add</button>
            <button onClick={randomColor}>random</button>
        </div>
    );
}

export default Listen;
