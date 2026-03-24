import React from "react";
import "./Accueil.css";

export default function Accueil() {
  return (
    <main className="accueil-main">
      <section className="hero">
        <h1>
          🍞 Le Fournil de Cosne-Cours-sur-Loire
        </h1>

        <p className="hero-text">
          <strong>Boulangerie artisanale à Cosne-Cours-sur-Loire</strong><br />
          Pains tradition, brioche maison et spécialités locales depuis 1972.
        </p>

        <a
          href="tel:+3386281234"
          className="cta-appeler"
        >
          📞 Appeler maintenant
        </a>
      </section>

      <section className="infos">
        <div className="infos-container">
          <h2>
            📍 12 Rue du Commerce, 58600 Cosne-Cours-sur-Loire
          </h2>

          <div className="infos-grid">
            <div>
              <h3>🕒 Horaires</h3>
              <p><strong>Mardi-Samedi :</strong> 7h00 - 19h30</p>
              <p><strong>Dimanche :</strong> 7h00 - 13h00</p>
            </div>

            <div className="box-specialites">
              <h3>🥖 Nos spécialités</h3>
              <p>
                • Baguette tradition <br />
                • Pain aux noix <br />
                • Brioche maison <br />
                • Pain de campagne
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}