import './App.css';

function App() {
  return (
      <div className={"container"}>
        <div className="board">
            <div className="header">
                <div className="title">
                    <a href="">
                        <i className="fab fa-github"></i>
                    </a>
                    <h1 className="board-title">
                        Yacht Dice
                    </h1>
                    <a href="">
                        <i className="far fa-question-circle"></i>
                    </a>
                </div>
                <div className="dice">
                    <div className="dice-container">
                        <i className="die fas fa-dice-two "></i>
                        <i className="die fas fa-dice-two "></i>
                        <i className="die fas fa-dice-two "></i>
                        <i className="die fas fa-dice-two "></i>
                        <i className="die fas fa-dice-two "></i>
                    </div>
                    <button className="dice-roll-button">
                        2 Rolls Left
                    </button>
                </div>
            </div>

            <div className="sheet">

            </div>
        </div>
      </div>
  );
}

export default App;
