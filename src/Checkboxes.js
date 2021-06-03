import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";

function Checkboxes() {
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);
    const OPTIONS = ["One", "Two", "Three"];



    function save(e) {
        console.log(e.target.checked)
    }




    return (
        <div>
            <input type="checkbox" name="one" checked={checkbox1} /><br/>
            <input type="checkbox" name="two" checked={checkbox2} /><br/>
            <input type="checkbox" name="three" checked={ checkbox3} /><br/>
            <button onClick={(save) }>save</button>


        </div>
    );
}

export default Checkboxes;
