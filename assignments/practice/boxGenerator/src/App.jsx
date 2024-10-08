import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color.trim() === '') return;

    setBoxes([...boxes, color]);
    setColor('');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="colorInput">Enter a color: </label>
        <input
          id="colorInput"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Add Box</button>
      </form>

      <div className="box-container">
        {boxes.map((boxColor, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: boxColor }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;