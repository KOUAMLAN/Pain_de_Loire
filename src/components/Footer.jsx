import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        © {new Date().getFullYear()} Le Fournil de La Charité-sur-Loire | Boulangerie artisanale | 
        <a href="/mentions-legales"> Mentions légales</a>
      </div>
    </footer>
  );
}