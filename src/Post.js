import {useRef, useState} from "react";

function Post() {
    const [post, setPost] = useState(0)
    const name = useRef('')
    const message = useRef('')
    const [stateValue, setStateValue] = useState('')

    function setValue() {
        if(stateValue.current.value == "nickname"){
            setStateValue("kai")
        }else if(stateValue.current.value == "email"){
            setStateValue("kai@bria.ch")
        }else{
            setStateValue("")
        setPost('Name: '+name.current.value+' / Message: '+message.current.value+' / State: '+stateValue.current.value)
    }
    function changeBMI(e) {
        let kgv=e.target.value
        if (!isNaN(kgv)) {

        }
        return 'isNAN';
    }

    return (
        <div>
            Name:<br/>
            <input ref={name}/>
            <br/>
            Message:<br/>
            <textarea ref={message}/>
            <br/>
            {/* eslint-disable-next-line no-undef */}
            <select ref={stateValue}>
                <option value="nickname">Nicknamen anzeigen</option>
                <option value="email">E-Mail-Adresse anzeigen</option>
                <option selected value="none">Keine anzeigen</option>
            </select>
            <br/>
            <button onClick={(setValue)} >Speichern</button>
            <br/>
            {post}



        </div>
    );
}
}

export default Post;
