import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleReactModal from 'simple-react-modal';

function App() {
  const defaultContainerStyles = {
    padding: '10px 10px 30px',
    borderRadius: '10px',
    margin: '10vh auto 5px',
    width: '90vw',
    maxWidth: '500px',
    minHeight: '470px',
    backgroundColor: '#F9F9F9'
  };

  const modalStyle = {
    transition: 'opacity 0.25s ease-in-out',
    background: 'rgba(48, 48, 48, 0.85)',
    fontFamily: null
  };

  const containerStyles = {
    ...defaultContainerStyles
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SimpleReactModal
        show={true}
        style={modalStyle}
        containerStyle={containerStyles}
      >
        test
      </SimpleReactModal>
    </div>
  );
}

export default App;
