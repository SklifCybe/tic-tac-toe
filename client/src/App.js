import React from 'react';
import {io} from 'socket.io-client'

import { useRoutes } from './routes';

const socket = io('http://localhost:5050');

export const App = () => {
  const [isShowBoard, setIsShowBoard] = React.useState(false);
  const routes = useRoutes(isShowBoard, setIsShowBoard, socket);

  return (
    <div className="wrapper">
      <h1 className="title">tic tac toe</h1>
      {routes}
    </div>
  );
};
