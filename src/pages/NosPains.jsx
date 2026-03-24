import React from "react";
import { Helmet } from "react-helmet-async";
import "./NosPains.css";

export default function NosPains() {
  const pains = [
    { nom: "Baguette tradition", img: "/images/baguette.webp" },
    { nom: "Pain aux noix", img: "/images/noix.webp" },
    { nom: "Brioche maison", img: "/images/brioche-cosnoise.webp" },
    { nom: "Pain complet", img: "/images/pain-complet.webp" },
  ];

  return (
    <>
      <Helmet>
        <title>Pains artisanaux à Cosne-Cours-sur-Loire | Le Fournil</title>
        <meta
          name="description"
          content="Découvrez nos pains artisanaux à Cosne-Cours-sur-Loire : pain au levain, pain complet, baguette tradition et spécialités maison."
        />
      </Helmet>

      <main className="nospains-section">
        <h1 className="nospains-title">
          Nos pains artisanaux à Cosne-Cours-sur-Loire
        </h1>

        <div className="nospains-grid">
          {pains.map((pain) => (
            <article className="nospains-card" key={pain.nom}>
              <img
                src={pain.img}   // ✅ CHEMIN FIX
                alt={`Pain ${pain.nom}`}
                loading="lazy"
              />
              <h2>{pain.nom}</h2>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}