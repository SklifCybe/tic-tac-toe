import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';

import { setPlayer, setBoard, setWinner } from '../redux/actions/game';
import { useWinner } from '../hooks/winner-hook';
import { UserList } from './UserList';

export const Board = ({ setIsShowBoard }) => {
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
    dispatch(setBoard(Array(9).fill('')));
    dispatch(setPlayer('O'));
    setIsShowBoard(false);
  };

  return (
    <>
      <UserList users={['Ilya', 'Naruto']} />
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="board__cell" onClick={() => squareClick(index)}>
            {cell}
          </div>
        ))}
        <NavLink className="button exit" to="/" onClick={exitHandler}>
          Exit
        </NavLink>
      </div>
    </>
  );
};
