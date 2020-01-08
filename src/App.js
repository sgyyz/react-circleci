import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      Well, launching {process.env.REACT_APP_ENV} lol.
      <br />
      Call API through:
      <a href={process.env.REACT_APP_API_URL}>
        {process.env.REACT_APP_API_URL}
      </a>
    </div>
  );
}

export default App;
