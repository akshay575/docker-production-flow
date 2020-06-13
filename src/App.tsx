import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, this is an application to demonstrate complete development lifecycle with Docker!
        </p>
        <p style={{ margin: 0 }}>It uses below technology stack:</p>
        <ul style={{ textAlign: 'left' }}>
          <li>React</li>
          <li>Docker multi-stage builds</li>
          <li>Travis CI</li>
          <li>AWS Elastic Beanstalk</li>
          <li>AWS S3 Bucket</li>
          <li>AWS IAM</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
 