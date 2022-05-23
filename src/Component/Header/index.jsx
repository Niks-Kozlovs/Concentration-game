import { useState } from "react";
import { NavLink } from "react-router-dom";
import BurgerMenuButton from "../BurgerMenuButton";
import './style.scss';

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header>
      <nav className={isNavbarOpen ? 'open' : ''} >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/game">Game</NavLink>
        <NavLink to="/instructions">Instructions</NavLink>
        <NavLink to="/about-us">About us</NavLink>
      </nav>

      <BurgerMenuButton onToggle={toggleNavbar} isOpen={isNavbarOpen} />
    </header>
  );
}

export default Header;
