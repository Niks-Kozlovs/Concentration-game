import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import BurgerMenuButton from "../BurgerMenuButton";
import './style.scss';

function Header() {
  const location = useLocation();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleClick = () => {
    setIsNavbarOpen(false);
  }

  //Check if current url is "/"
  const isHomePage = location.pathname === "/";

  if (isHomePage) {
    return null;
  }

  return (
    <header>
      <nav className={isNavbarOpen ? 'open' : ''} >
        <NavLink onClick={handleClick} to="/">Home</NavLink>
        <NavLink onClick={handleClick} to="/game">Game</NavLink>
        <NavLink onClick={handleClick} to="/instructions">Instructions</NavLink>
        <NavLink onClick={handleClick} to="/about-us">About us</NavLink>
      </nav>

      <BurgerMenuButton onToggle={toggleNavbar} isOpen={isNavbarOpen} />
    </header>
  );
}

export default Header;
