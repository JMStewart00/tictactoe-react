import { useState } from 'react';
import './App.css';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  console.log(board);

  const handleClick = (i) => {
    const boardCopy = [...board];

    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;

    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  return (
    <div>
      <div>
        <p>
          {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}
        </p>
      </div>
      <Board onClick={handleClick} squares={board} />
    </div>
  );
}

const Board = ({ squares, onClick }) => {
  const style = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  };

  return (
    <div style={style}>
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );
}

const Square = ({value, onClick}) => {
  const style = {
    background: "lightblue",
    border: "2px solid darkblue",
    fontSize: "30px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none",
  };

  return (
    <div
      style={style}
      onClick={onClick}
    >
      {value}
    </div>
  );
}

export default App;
