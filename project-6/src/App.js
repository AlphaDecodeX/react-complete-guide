import React from 'react';
import { useState, useCallback } from 'react';
import Button from "./components/UI/Button/Button"
import './App.css';
import Demo from './components/Demo/Demo';

function App() {
  const [showparagraph, setShowParagraph] = useState(false);
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
