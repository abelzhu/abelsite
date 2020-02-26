import React from 'react';
import logo from './logo.svg';
import './App.css';

const helloAbel = <h1>Hello Abel from const</h1>
const user = {
  firstName: 'Abel',
  lastName: 'Zhu'
};

function formatname(user) {
  return (user.firstName + ' ' + user.lastName);
}

function App() {
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
        <h1>{helloAbel}</h1>
        <h2>Welcome to {formatname(user)}'s page.</h2>
      </header>
    </div>
  );
}

export default App;
