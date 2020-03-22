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
       
        {/* {elementWithEvent} */}
        <a href="#" onClick={clickHandle}>Click me1</a>
        <h1>Welcome to {formatname(user)}'s page.</h1>
        
        <h2>自我介绍</h2>
        <p>
        热爱技术，喜欢思考，爱读书；15年以上的工作经验，12年在欧美外企，英语流利；有11年以上的研发部主管/项目主管/架构经验；7年技术总监经验；熟悉软件开发生命周期，各种设计模式，构建云服务，带队实现过多个中等规模的软件平台；多次开发团队的组建和培训经验；涉及的技术面比较广；研发团队管理经验丰富；
        </p>
        {/* {getGreeting(user)}
        {getGreeting()} */}
        
      </header>
    </div>
  );

  
}

export default App;
