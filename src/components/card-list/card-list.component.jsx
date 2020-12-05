import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
    {props.chesss.map(chess => (
      <Card key={chess.id} chess={chess} />
    ))}
  </div>
);
