import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './components/gameBoard.component/gameBoard.component';
import KeyboardManager from './common/shared/controls/keyboard.manager';

function App() {
  return (
    <div className="App">
      <GameBoard />
      <KeyboardManager />
    </div>
  );
}

export default App;
