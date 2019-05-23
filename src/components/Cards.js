import React from 'react';
import Card from './Card';

const Cards = ({ data }) => {
    let cards;
    console.log(data);
    if(data.length){
        cards = data.map(robot => {
            return (
                <Card
                    name={robot.name}
                    email={robot.email}
                    image={`https://robohash.org/${robot.id}?set=set2?size=200x200`}
                    key={robot.id}
                />
            );
        });
    }
    else { 
        cards = <p>No items yet</p>;
    }
    return (
        <div>
            {cards}
        </div>
    );
};

export default Cards;