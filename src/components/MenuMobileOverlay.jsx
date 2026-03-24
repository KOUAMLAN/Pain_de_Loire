import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MenuMobileOverlay.css";

export default function MenuMobileOverlay({ open, onClose }) {
  useEffect(() => {
    const handleKey = e => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="menu-overlay" onClick={onClose}>
      <div className="menu-panel" onClick={e => e.stopPropagation()}>
        <button className="menu-close-btn" onClick={onClose}>✕</button>
        <nav className="menu-links">
          <Link to="/" onClick={onClose}>Accueil</Link>
          <Link to="/nos-pains" onClick={onClose}>Nos Pains</Link>
          <Link to="/contact" onClick={onClose}>Contact</Link>
          <Link to="/a-propos" onClick={onClose}>À propos</Link>
          <Link to="/guide-client" onClick={onClose}>Guide client</Link>
          <Link to="/mentions-legales" onClick={onClose}>Mentions légales</Link>
        </nav>
      </div>
    </div>
  );
}