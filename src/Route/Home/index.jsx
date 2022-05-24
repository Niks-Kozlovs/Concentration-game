import { Link } from "react-router-dom";
import './style.scss';

function Home() {
    return (
      <main className="Home">
        <h1>Concetration game</h1>
        <div className="buttons">
          <Link to="/game">Play now!</Link>
          <Link to="/instructions">Instructions</Link>
        </div>
      </main>
    );
  }

  export default Home;
