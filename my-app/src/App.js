import React from 'react';
import './App.css';

function App() {
  return (
     <div className="container">
        <div className="App">
            <input className="input" type="text" placeholder="Shorten your link" />
            <button id="button" type="submit">Shorten</button>
        </div>
    </div>
  );
}

export default App;
