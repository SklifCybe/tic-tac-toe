import React from 'react';
import { Route } from 'react-router-dom';

import { Board } from './components/Board';
import { JoinBlock } from './components/JoinBlock';
import { Congratulation } from './components/Congratulation';

function App() {
  return (
    <div className="wrapper">
      <h1>крестики нолики</h1>
      <Route exact path="/" component={JoinBlock} />
      <Route exact path="/game" component={Board} />
      <Route exact path="/congratulation" component={Congratulation} />
    </div>
  );
}

export default App;