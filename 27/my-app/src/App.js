
//program for display hello using react.js and apply times new roman font, size=20,color=red using CSS stylesheet

import React from 'react';
import './App.css';  // Import the default App.css
import './Styles.css';  // Import your custom styles.css

function App() {
  return (
    <div className="App">
      <p className="hello-text">Hello</p>
    </div>
  );
}

export default App;
