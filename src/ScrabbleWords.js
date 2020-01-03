import React from 'react';
import scrabble from 'scrabble/scrabble.js';

const ScrabbleWords = props => {
  const { text } = props;
  const words = scrabble(text);
  if (typeof words === 'string') return (
    <div className='wordsContainer'>{words}</div>
  )

  return (
    <div className='wordsContainer'>
      {words.map((word, index) => (
        <span className='word'>
          {`${word}${index === words.length -1 ? '' : ','}`}
        </span>
      ))}
    </div>
  )
}


export default ScrabbleWords;
