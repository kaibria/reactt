import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'


function Deckofcard() {
    let [card, setCard] = useState([])
    let [deck, setDeck] = useState([])
    let [herz, setHerz] = useState([])
    let [pik, setPik] = useState([])
    let [kreuz, setKreuz] = useState([])
    let [karo, setKaro] = useState([])
    let [counter, setCoutner] = useState(0)
    let [state, setState] = useState(true)
    let [stateGenerate, setStateGenerate] = useState(false)

    const btHandler = () => {
        setState(false)
        fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            .then(response => response.json())
            .then(data => setDeck(data))


    }
    const btHandlerCard = () => {
        setStateGenerate(true)
        if (counter != 52) {
            fetch('https://deckofcardsapi.com/api/deck/' + deck.deck_id + '/draw/?count=1')
                .then(response => {
                    if (response.status === 200) {
                        response.json()
                            .then(data => {
                                let newCard = data.cards[0]
                                setCard(newCard)

                                if (newCard.suit == 'HEARTS') {
                                    herz.push(data.cards[0])
                                    herz.sort();
                                    console.log("herz")
                                } else if (newCard.suit == 'SPADES') {
                                    pik.push(data.cards[0])
                                    pik.sort();
                                    console.log("pik")
                                } else if (newCard.suit == 'CLUBS') {
                                    kreuz.push(data.cards[0])
                                    kreuz.sort();
                                    console.log("kreuz")
                                } else if (newCard.suit == 'DIAMONDS') {
                                    karo.push(data.cards[0])
                                    karo.sort();
                                    console.log("karo")
                                }
                            })
                    }
                })


            sortCards()
            setCoutner(counter + 1)
        } else {
            setState(true)
            setCard([])
            sortCards()
        }
    }


    function sortCards() {


    }

    return (
        <div>
            <Form>
                <Button onClick={btHandler} class="btn btn-success" disabled={stateGenerate}>Deck generate</Button>
                <Button onClick={btHandlerCard} disabled={state}>Draw a Card</Button>

                <br/>
                <img src={card.image}></img>
            </Form>

            {herz.map((cardheart, idx) =>
                <img key={idx} src={cardheart.image} width="50px" length="auto"></img>)
            }
            <br/>
            {pik.map((cardpik, idx) =>
                <img key={idx} src={cardpik.image} width="50px" length="auto"></img>)
            }
            <br/>
            {karo.map((cardkaro, idx) =>
                <img key={idx} src={cardkaro.image} width="50px" length="auto"></img>)
            }
            <br/>
            {kreuz.map((cardkreuz, idx) =>
                <img key={idx} src={cardkreuz.image} width="50px" length="auto"></img>)
            }
            <br/>
            Anzahl gezogene Karten {counter}
        </div>
    )
}

export default Deckofcard;
