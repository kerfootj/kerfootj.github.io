import React from 'react';
import Navbar from './Nav/Navbar';
import Game from './Game/Games';

import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Game />
    </div>
  );
};

export default App;
