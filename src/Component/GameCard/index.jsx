import './style.scss';

function GameCard({ onToggleFlip, flipped, hidden, children }) {
    return (
        <button
            className={`GameCard${hidden ? ' hidden' : ''}`}
            onClick={() => onToggleFlip()}
        >
            <div className={`GameCard-Inner${flipped ? ' flipped' : ''}`}>
                <div className="GameCard-Front" />
                <div className="GameCard-Back">
                    {children}
                </div>
            </div>
        </button>
    );
}

export default GameCard;
