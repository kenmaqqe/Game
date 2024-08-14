import React from 'react';
import "./style.css";

const MainMenu = ({ onStartGame }) => {
  return (
    <div className='mainMenu'>
      <h1>Космічний Ровер</h1>
      <button onClick={onStartGame}>Розпочати гру</button>
      <button onClick={() => alert('Налаштування')}>Налаштування</button>
      <button onClick={() => alert('Про гру')}>Про гру</button>
    </div>
  );
};

export default MainMenu;