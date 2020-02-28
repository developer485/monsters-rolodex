import React from 'react';

import './card.style.css';

export const Card = props => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&180*180`} />
        <h1>{props.monster.name}</h1>
        <h1>{props.monster.email}</h1>
    </div>
)