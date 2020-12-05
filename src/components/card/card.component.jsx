import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='chess'
      src={`https://robohash.org/${props.chess.id}?set=set2&size=180x180`}
    />
    <h2> {props.chess.name} </h2>
    <p> {props.chess.email} </p>
  </div>
);
