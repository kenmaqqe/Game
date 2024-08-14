import React, { useState } from 'react';
import Game from './game.js';
import MainMenu from './components/mainMenu/mainMenu.js';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="App">
      {gameStarted ? <Game /> : <MainMenu onStartGame={handleStartGame} />}
    </div>
  );
}

export default App;
