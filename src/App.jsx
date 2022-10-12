// Hooks
import { useState } from 'react';
import { Button } from './components/Button';
import './style.css';

const App = () => {
  // Initiating State with initial value 0
  const [count, setCount] = useState(0);

  // Function to handle the click event
  const handleClick = () => {
    // Updating State
    setCount(count + 1);
  }

  return (
    <div
      className="box"
      style={{
        backgroundColor: "rgb(64, 64, 64)",
        color: "#fff",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        margin: "20px",
        width: "400px",
        boxShadow: "0 3px 15px #777"
      }}
    >
      <h1
        style={{
          fontFamily: "'Segoe UI', sans-serif",
          textAlign: "center",
          marginBottom: "20px"
        }}
      >
        React Counter
      </h1>
      <Button
        count={count}
        onClick={handleClick}
      />
    </div >
  );
}

export default App;