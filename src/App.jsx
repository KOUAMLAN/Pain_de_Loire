import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Accueil from "./pages/Accueil.jsx";
import NosPains from "./pages/NosPains.jsx";
import Contact from "./pages/Contact.jsx";
import APropos from "./pages/APropos.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";
import GuideClient from "./pages/GuideClient.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/nos-pains" element={<NosPains />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/guide-client" element={<GuideClient />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}