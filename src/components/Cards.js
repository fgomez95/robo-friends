import React from 'react';
import Card from './Card';

const Cards = ({data}) => {
    const cards = data.map(robot => {
        return (
            <Card 
            name={robot.name}
            email={robot.email}
            image={`https://robohash.org/${robot.id}?set=set2`}
            key={robot.id}
            />
            );
    });
    
    return (
        <div>
            {cards}
        </div>
        );
};

export default Cards;