import React, { useState } from "react";
import dataJSON from "./data.json";
import Img from "./components/img";
import "./App.css";

function App() {
  const [data, setDataState] = useState(
    dataJSON.sort(() => Math.random() - 0.5)
  );
  const [score, setScoreState] = useState(0);
  const [leaderBoard, setLeaderState] = useState(0);
  const [status, setStatusState] = useState("Click any button to play!");
  const [cssClass, setClassState] = useState("flashy");
  function handleClick(id) {
    setClassState("Flop");
    const index = data.findIndex(x => x.name === id);
    if (data[index].isNotChosen) {
      data[index].isNotChosen = false;
      setScoreState(score + 1);
      setStatusState("Correct Answer!");
      setDataState(data.sort(() => Math.random() - 0.5));
      if (score >= leaderBoard) setLeaderState(score + 1);
    } else {
      setScoreState(0);
      setStatusState("Game Over!");
      data.map(a => (a.isNotChosen = true));
      setDataState(data.sort(() => Math.random() - 0.5));
    }
    setTimeout(() => {
      setClassState("flashy");
    }, 5);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Minecraft Clicky Game</h1>
        <h2>
          Score: {score} | HighScore: {leaderBoard} - Status:
        </h2>
        <h2 className={cssClass}> {status}</h2>
      </header>
      <div className="imgDiv">
        {data.map((img, i) => (
          <Img key={i} img={img.img} id={img.name} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
