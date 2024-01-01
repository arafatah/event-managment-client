import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Aos from "aos";
import 'aos/dist/aos.css'



const Cards = () => {
    
    const [cards, setCards] = useState([]);


    useEffect(() => {
        fetch("cards.json")
            .then(res => res.json())
            .then(data => setCards(data))
            Aos.init({duration:2000})


    }, [])
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-5 gap-3 items-center justify-center my-11 lg:pl-20" data-aos = "fade-right">

            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }


        </div>
    );
};

export default Cards;