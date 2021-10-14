import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { JoinBlock } from './components/JoinBlock';
import { Board } from './components/Board';
import { Congratulation } from './components/Congratulation';

export const useRoutes = (isShowBoard, setIsShowBoard, socket) => {
  if (!isShowBoard) {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <JoinBlock setIsShowBoard={setIsShowBoard} socket={socket} />}
        />
        <Redirect exact to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/game" render={() => <Board setIsShowBoard={setIsShowBoard} />} />
      <Route exact path="/congratulation" render={() => <Congratulation />} />
      <Redirect to="/game" />
    </Switch>
  );
};
