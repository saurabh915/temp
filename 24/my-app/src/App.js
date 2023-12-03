//Write a program for display hello using react.js class component

// File: App.js

import React from 'react';
import HelloClassComponent from './HelloClassComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Your React App</h2>
        <HelloClassComponent />
      </div>
    );
  }
}

export default App;
