import React from "react";

export default function ProductCard({ nom, img, width = 400, height = 300 }) {
  return (
    <article style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src={`/images/${img}.webp`}
        width={width}
        height={height}
        style={{ objectFit: "cover", aspectRatio: `${width}/${height}` }}
        loading="lazy"
        alt={nom}
      />
      <h2>{nom}</h2>
    </article>
  );
}