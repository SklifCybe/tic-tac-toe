import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function Congratulation() {
  const player = useSelector(({ game }) => game.winner);

  return (
    <div className="congratulation">
      <h2>{player === 'DRAW' ? 'Draw' : `Win "${player}"`}</h2>
      <NavLink className="button" to="/game">
        Repeat
      </NavLink>
    </div>
  );
}
