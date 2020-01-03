import React, { useState } from 'react';
import './App.css';
import ScrabbleWords from './ScrabbleWords';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <h1>Scrabble Word Finder</h1>
      <p>
        {'Enter a word or letters in the text box below and find a list of words '
          + 'that can be formed by rearranging some or all of the letters.'}
      </p>
      <label>Find words: </label>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ScrabbleWords text={text} />
    </div>
  );
}

export default App;
