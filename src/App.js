import './App.css';
import PlayerInfo from './components/PlayerInfo';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="App">
      <div>TIC TAC TOE</div>
      <div>
      <PlayerInfo name="Player1" logo="X"/>
      <PlayerInfo name="Player2" logo="O" />
      </div>
      <div>Game board</div>
      <GameBoard />
    </div>
  );
}

export default App;
