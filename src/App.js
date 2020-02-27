import React from 'react';
import logo from './logo.svg';
import './App.css';

const helloAbel = <h1>Hello Abel from const</h1>;

const user = {
  firstName: 'Abel',
  lastName: 'Zhu'
};

function getGreeting(user) {
  if (user) {
    return <h1>Welcome, {formatname(user)}!</h1>;
  }
  else {
    return <h1>Welcome, stranger!</h1>;
  }
}

function clickHandle() {
  console.log('this is end!11');
}

// event
const elementWithEvent = <a href='#' onClick="console.log('log'); return false"> click me </a>;

function formatname(user) {
  return (user.firstName + ' ' + user.lastName)
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
        {/* <div><h1>{helloAbel}</h1></div> */}
        
        {/* {elementWithEvent} */}
        <a href="#" onClick={clickHandle}>Click me1</a>
        <h2>Welcome to {formatname(user)}'s page.</h2>
        
        {/* {getGreeting(user)}
        {getGreeting()} */}
        
      </header>
    </div>
  );

  
}

export default App;
