import React from "react";
import './App.css';

function App() {
  return (
    <div className="App"> 
    {/* We're defining 'className' so that when we import App.css we can grab our definitions.
        This lets us customize what the different 'things' look like using .css! */}
      <header className="App-header">
        <text>
          React.js
        </text>
      </header>
      <body className="App-body">
        <text>
          Hey. <br/> {/* <br/> creates a line break! */}
          This is just a test page. <br/>
          Cool, huh? :)
        </text>
      </body>
    </div>
  );
}

export default App; /* We have to export the app so that it works. */