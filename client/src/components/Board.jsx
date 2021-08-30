import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';

import { setPlayer, setBoard, setWinner } from '../redux/actions/game';
import { setRoomId, setRoomIdd, setUserName } from '../redux/actions/join';
import { useWinner } from '../hooks/winner-hook';

export function Board() {
  const dispatch = useDispatch();
  const { player, board } = useSelector(({ game }) => game);
  const winPlayer = useWinner(board);
  const history = useHistory();

  React.useEffect(() => {
    if (winPlayer) {
      dispatch(setBoard(Array(9).fill('')));
      dispatch(setPlayer('O'));
      dispatch(setWinner(winPlayer));
      history.push('/congratulation');
    }
  }, [winPlayer]);

  const squareClick = (index) => {
    const nextPlayer = player === 'X' ? 'O' : 'X';

    if (!board[index]) {
      board[index] = nextPlayer;
    }

    dispatch(setPlayer(nextPlayer));
    dispatch(setBoard(board));
  };

  const exitHandler = () => {
    dispatch(setRoomId(''));
    dispatch(setUserName(''));
    dispatch(setBoard(Array(9).fill('')));
    dispatch(setPlayer('O'));
  };

  return (
    <>
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="board__cell" onClick={() => squareClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      <NavLink className="button" to="/" onClick={exitHandler}>
        Выйти
      </NavLink>
    </>
  );
}
