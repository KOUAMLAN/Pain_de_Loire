import { Phone } from "lucide-react";
import config from "../data/config.json";

export default function Hero() {
  const { nom, slogan, telephone } = config.boulangerie;

  return (
    <section className="bg-[#F5F5DC] py-12 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
        <img
          src="/images/pain-hero.webp"
          alt="Pain chaud sortant du four"
          width="800"
          height="500"
          fetchpriority="high"
          className="w-full max-w-md rounded-lg shadow"
        />
        <h1 className="text-3xl font-bold mt-4">
          {nom} <span className="ml-2">{slogan}</span>
        </h1>
        <a
          href={`tel:${telephone.replace(/\s+/g, "")}`}
          className="mt-4 inline-flex items-center px-6 py-3 bg-[#8B4513] text-white rounded-lg"
        >
          <Phone className="mr-2" />
          Appeler {telephone}
        </a>
      </div>
    </section>
  );
}
