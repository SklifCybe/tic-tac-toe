import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setRoomId, setUserName } from '../redux/actions/join';

export function JoinBlock() {
  const dispatch = useDispatch();
  const { roomId, userName } = useSelector(({ join }) => join);
  const history = useHistory();

  const changeRoomId = (event) => {
    dispatch(setRoomId(event.target.value));
  };

  const changeUserName = (event) => {
    dispatch(setUserName(event.target.value));
  };

  const enterHandler = () => {
    if (!roomId || !userName) {
      if (!roomId && userName) {
        return alert('Введите номер комнаты.');
      }
      if (!userName && roomId) {
        return alert('Введите имя пользователя.');
      }
      return alert('Введите данные.');
    }

    history.push('/game');
  };

  return (
    <div className="join">
      <input type="text" placeholder="Номер комнаты" values={roomId} onChange={changeRoomId} />
      <input type="text" placeholder="Имя" values={userName} onChange={changeUserName} />
      <div>
        <button className="button" onClick={enterHandler}>Вход</button>
      </div>
    </div>
  );
}
