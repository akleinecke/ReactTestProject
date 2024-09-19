import { useState } from 'react';
import './App.css';

interface CustomButtonProperties {
  title: string;
  disabled: boolean;
  click: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function CustomButton({title, disabled, click}: CustomButtonProperties) {
  return(
    <button
    onClick={click}
    className="App-button"
    disabled={disabled}>
      {title}
    </button>
  );
}

function App() {
  const [count, setCount] = useState(1);

  const handleButtonPress = () => {
    setCount(count + 1);
  }

  return (
    <div className="App"> 
    {/* We're defining 'className' so that when we import App.css we can grab our definitions.
        This lets us customize what the different 'things' look like using .css! */}
      <header className="App-header">
        <h1>
          React.js Header
        </h1>
      </header>
      <body className="App-body">
        <p>
          Hey. <br/> {/* <br/> creates a line break! */}
          This is just a body test. <br/>
          Cool, huh? :)
        </p>
        <div style={{ height: '50px' }}/> {/* Spacer / Margin */}
        <p>{count}</p>
        <div style={{ height: '10px' }}/> {/* Spacer / Margin */}
        <CustomButton title="Do Not Press" disabled={false} click={handleButtonPress}/>
      </body>
    </div>
  );
}

export default App; /* We have to export the app so that it works. */