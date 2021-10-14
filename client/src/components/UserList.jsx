import React from 'react';

export const UserList = ({ users }) => {
  const [playerOne, playerTwo] = users;

  return (
    <ul className="userlist">
      <li>№ Room: 123</li>
      <li>[ X ]: {playerOne}</li>
      <li>[ O ]: {playerTwo}</li>
    </ul>
  );
};
