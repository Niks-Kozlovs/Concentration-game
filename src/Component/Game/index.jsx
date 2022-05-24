import React, { useState, useEffect, useRef } from 'react';
import GameCard from '../GameCard';
import './style.scss';

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function duplicate(array) {
  const props = {
    flipped: false,
    hidden: false,
  }

  return array.reduce((acc, curr, index) => {
    acc.push({
      Elem: () => curr,
      id: index,
      type: index,
    });

    acc.push({
      Elem: () => curr,
      id: index + array.length,
      type: index,
    });

    return acc;
  }, []);
}

function Game({ children }) {
  const [cards, setCards] = useState([]);
  const [hiddenCards, setHiddenCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [score, setScore] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    setCards(shuffle(duplicate(children)));

    return () => {
      clearTimeout(timerRef.current);
    }
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setScore(score+1);
      timerRef.current = setTimeout(() => {
        validateCards();
      }, 1000);
    }
  }, [flippedCards]);

  const validateCards = () => {
    const card1 = cards[flippedCards[0]];
    const card2 = cards[flippedCards[1]];

    if (card1.type === card2.type) {
      setHiddenCards([...hiddenCards, ...flippedCards]);
    }

    setFlippedCards([]);
  }

  const handleClick = (cardArrayIndex) => {
    if (flippedCards.length >= 2) {
      if(timerRef.current) {
        clearTimeout(timerRef.current);
      }

      validateCards();
      setFlippedCards([cardArrayIndex]);
      return;
    }

    if (flippedCards.includes(cardArrayIndex)) {
      return;
    }

    setFlippedCards([...flippedCards, cardArrayIndex]);
  }

  if (hiddenCards.length === cards.length) {
    return (
      <div className="WinScreen">
        <div>
          <h1>You won!</h1>
          <p>It took {score} moves</p>
        </div>
        <button onClick={
          () => {
            setScore(0);
            setCards(shuffle(cards));
            setHiddenCards([]);
            setFlippedCards([]);
          }
        }>Try again?</button>
      </div>
    );
  }

  return (
    <>
      <div className='Game'>
        {cards.map((card, index) => (
          <GameCard
            key={card.id}
            onToggleFlip={() => handleClick(index)}
            flipped={flippedCards.includes(index)}
            hidden={hiddenCards.includes(index)}
          >
            {card.Elem()}
          </GameCard>))}
      </div>
      <h2>Moves: {score}</h2>
    </>
  );
}

export default Game;
