import React, { useState, useEffect } from 'react';
import './App.css';
import { SingleCard } from './components/SingleCard';

// create a constant called cardImages to with an array of objects of our images!


const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);


  //shuffle cards!
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] //shuffledCards will take duplicate the cardimages array!
      .sort(() => Math.random() - 0.5) //will sort it randomly 
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  }

  const handleChoice = (something) => {
    choiceOne ? setChoiceTwo(something) : setChoiceOne(something)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("we have a match!");
        resetTurns();
      } else {
        console.log("that ain't it!");
        resetTurns();
      }
    }
  }, [choiceOne, choiceTwo])

  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1)
  }



  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card =>
        (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
