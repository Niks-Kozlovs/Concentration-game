import './style.scss';

function GameCard({ onToggleFlip, flipped, hidden, children }) {
    return (
        <button
            className={`GameCard ${flipped ? 'flipped' : ''} ${hidden ? 'hidden' : ''}`}
            onClick={() => onToggleFlip()}
        >
            {children}
        </button>
    );
}

export default GameCard;
