
import './App.css';
// import MyForm from './components/form/MyForm';
// import MyImage from './components/image/MyImage';

import React, { useState } from 'react';

function App() {

  const [color, setColor] = useState("white");


  return (
    <div className="App">
      <header className="App-header">

        <div style={{ display: "flex", }}>

          <div style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "10px"
          }}>

            <h5>Please type a valid color:</h5>

            <input id='in' type="text" />

            <button onClick={() => {
              let input = document.getElementById("in");
              let val = input.value;
              console.log(val);
              setColor(val);
            }}>Change Color</button>

          </div>
          <div style={{
            width: "300px",
            height: "300px",
            backgroundColor: color,
            marginLeft: "10px"
          }} >

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
