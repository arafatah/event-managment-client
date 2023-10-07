import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [cards, setCards] = useState([]);


    useEffect(() => {
        fetch("cards.json")
            .then(res => res.json())
            .then(data => setCards(data))

    }, [])
    return (
        <div className="grid lg:grid-cols-3 items-center justify-center my-11 pl-20">

            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }


        </div>
    );
};

export default Cards;