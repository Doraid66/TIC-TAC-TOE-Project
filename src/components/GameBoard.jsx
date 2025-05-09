export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSybmole, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSybmole !== null}
                >
                  {playerSybmole}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
