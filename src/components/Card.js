import React from 'react';

const card = (props) => {
    return(
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={props.image} 
                alt={props.email}/>
                <h3>{props.name}</h3>
                <p>{props.email}</p>
            </div>
        );
};

export default card;