import React from "react";
import "./GuideClient.css";

export default function GuideClient() {
  return (
    <main className="container">
      <h1>Guide client : Comment utiliser votre site</h1>

      <section>
        <h2>1. Diffusion & communication</h2>
        <p>
          Annoncez la mise en ligne sur vos réseaux, Google My Business, Newsletter, etc.
          Ajoutez l'adresse du site sur tous vos supports et encouragez vos clients à partager ou laisser un avis.
        </p>
      </section>

      <section>
        <h2>2. Référencement & visibilité</h2>
        <p>
          Actualisez régulièrement les contenus, partagez le lien sur annuaires locaux et forums, et investissez dans des campagnes géolocalisées si nécessaire.
        </p>
      </section>

      <section>
        <h2>3. Contact & interaction</h2>
        <p>
          Utilisez la page "Contact" ou le formulaire pour recevoir des messages. Répondez rapidement et relancez les contacts importants.
        </p>
      </section>

      <section>
        <h2>4. Mise à jour & maintenance</h2>
        <p>
          Sauvegardez tous les accès (admin, hébergeur). Contactez le développeur pour mises à jour ou correctifs. Pour des évolutions, un nouveau devis peut être établi.
        </p>
      </section>

      <section>
        <h2>5. Suivi des résultats</h2>
        <p>
          Consultez vos statistiques pour suivre le nombre de visiteurs et demandez des conseils d’optimisation si besoin.
        </p>
      </section>

      <section>
        <h2>Résumé</h2>
        <p>
          Faites connaître votre site, restez en contact avec le développeur pour toute évolution, surveillez les retours clients et adaptez-vous.
        </p>
      </section>
    </main>
  );
}