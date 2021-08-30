import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function Congratulation() {
  const player = useSelector(({ game }) => game.winner);

  return (
    <div className="congratulation">
      <h2>{player === 'DRAW' ? 'Ничья' : `Победил "${player}"`}</h2>
      <NavLink className="button" to="/game">
        Заново
      </NavLink>
    </div>
  );
}
