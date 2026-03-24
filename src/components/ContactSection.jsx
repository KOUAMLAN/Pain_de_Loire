import React from "react";
import config from "../data/config.json";
export default function ContactSection() {
  const { adresse, telephone, horaires } = config.boulangerie;
  return (
    <section className="bg-[#F8FAFC] py-12" id="contact">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
        <h2 className="font-heading text-2xl mb-2 text-[#8B4513]">Horaires & Contact</h2>
        <address className="not-italic text-lg text-center">
          <div>
            <span className="font-bold">Adresse :</span> {adresse}
          </div>
          <div className="my-2 text-[#F59E0B]">
            <a href={`tel:${telephone.replace(/\s+/g, "")}`} className="underline">{telephone}</a>
          </div>
        </address>
        <div className="text-gray-800">
          {horaires.map((h) =>
            <div key={h.jour}><span className="font-bold">{h.jour} :</span> {h.heures}</div>
          )}
        </div>
        <form className="mt-4 w-full flex flex-col gap-3 max-w-md bg-white border rounded-lg p-6 shadow">
          <input className="border rounded px-3 py-2" placeholder="Votre nom" required />
          <input className="border rounded px-3 py-2" placeholder="Votre email" type="email" required />
          <textarea className="border rounded px-3 py-2" placeholder="Votre message" required rows={4} />
          <button type="submit" className="bg-[#8B4513] text-white rounded px-4 py-2 hover:bg-[#a96c38] transition">Envoyer</button>
        </form>
      </div>
    </section>
  );
}