import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      Well, launching {process.env.REACT_APP_ENV} now.
      <br />
      Call API through {process.env.REACT_APP_API_URL}
    </div>
  );
}

export default App;
