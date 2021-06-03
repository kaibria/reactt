import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";

function RadioButton() {
    const [radioOption, setRadioOption] = useState(0);



    function clickHandler(e) {
        console.log(e)
    }




    return (
        <div>
            <input type="radio" name="myOptions" value="option1" onChange={e=> setRadioOption(e.target.value)}/><br/>
            <input type="radio" name="myOptions" value="option2" onChange={e=> setRadioOption(e.target.value)}/><br/>
            <input type="radio" name="myOptions" value="option3" onChange={e=> setRadioOption(e.target.value)}/><br/>
            {radioOption}
            

        </div>
    );
}

export default RadioButton;
