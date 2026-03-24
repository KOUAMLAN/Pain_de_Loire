import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuMobileOverlay from "./MenuMobileOverlay.jsx";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>Le Fournil</NavLink>

      <ul className="navbar-links">
        <li><NavLink to="/" end>Accueil</NavLink></li>
        <li><NavLink to="/nos-pains">Nos Pains</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/guide-client">Guide client</NavLink></li>
        <li><NavLink to="/mentions-legales">Mentions légales</NavLink></li>
        <li><NavLink to="/a-propos">À propos</NavLink></li>
      </ul>

      <button
        className="navbar-burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >☰</button>

      <MenuMobileOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}