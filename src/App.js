import './App.css';
import { useState } from "react";
import PlayerInfo from './components/PlayerInfo';
import GameBoard from './components/GameBoard';

function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  function handleActivePlayer() {
    setActivePlayer((player) => {
      return player === 'X' ? 'O' : 'X';
    })
  }

  return (
    <div className="App">
      <div>TIC TAC TOE</div>
      <div id="players">
      <PlayerInfo name="Player1" logo="X" isActive={activePlayer === 'X'}/>
        <PlayerInfo name="Player2" logo="O" isActive={activePlayer === 'O'} />
      </div>
      <div>Game board</div>
      <GameBoard changeActivePlayer={handleActivePlayer} currPlayer={activePlayer}/>
    </div>
  );
}

export default App;
