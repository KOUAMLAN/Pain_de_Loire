import React from "react";
import config from "../data/config.json";

export default function MapEmbed() {
  const q = encodeURIComponent(config.boulangerie.adresse);

  return (
    <div
      className="w-full rounded-lg overflow-hidden shadow mt-6"
      aria-label="Localisation de Le Fournil de Cosne"
    >
      <iframe
        title="Google Maps Le Fournil de Cosne"
        src={`https://www.google.com/maps?q=${q}&output=embed`}
        width="100%"
        height="320"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy" // améliore performance LCP
      ></iframe>
    </div>
  );
}