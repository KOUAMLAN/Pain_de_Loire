import React from "react";
import "./MentionsLegales.css";

export default function MentionsLegales() {
  return (
    <main className="container">
      <h1>Mentions légales</h1>

      <h2>1. Éditeur du site</h2>
      <p>
        <strong>Le Fournil</strong><br />
        Boulangerie artisanale<br />
        Adresse : 12 Rue du Commerce, 58600 Cosne-Cours-sur-Loire<br />
        Téléphone : 03.86.28.12.34<br />
        Email : contact@lefournil-cosne.fr
      </p>

      <h2>2. Directeur de la publication</h2>
      <p>Jean Dupont</p>

      <h2>3. Hébergement</h2>
      <p>
        OVH SAS<br />
        Adresse : 2 rue Kellermann, 59100 Roubaix, France<br />
        Site web : <a href="https://www.ovh.com" target="_blank" rel="noreferrer">www.ovh.com</a>
      </p>

      <h2>4. Propriété intellectuelle</h2>
      <p>
        Tout contenu du site est propriété exclusive de <strong>Le Fournil</strong> sauf mention contraire.
      </p>

      <h2>5. Données personnelles</h2>
      <p>
        Les informations collectées sont utilisées uniquement pour la relation client. RGPD applicable.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Le site peut utiliser des cookies pour améliorer l’expérience. Configurez votre navigateur si besoin.
      </p>

      <h2>7. Responsabilité</h2>
      <p>
        Le Fournil s’efforce de fournir des informations exactes, mais ne peut garantir l’absence d’erreurs.
      </p>
    </main>
  );
}