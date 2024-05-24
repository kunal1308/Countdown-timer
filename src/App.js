import './App.css';
import CountdownTimer from "./components/CountdownTimer";

function App() {
  return (
    <div className="App">
       <h1><span className='countdown'>Countdown</span> <span className="timer">Timer</span></h1>
      <CountdownTimer />
    </div>
  );
}

export default App;
