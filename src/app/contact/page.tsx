"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    model: "jebba-femme-olive",
    fabric: "soie-sauvage",
    length: "",
    shoulders: "",
    chest: "",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Veuillez remplir votre nom et numéro de téléphone.");
      return;
    }

    const phoneNumber = "21698765432";
    const message = `Bonjour El Jebba,\n\nJe souhaite faire une demande de confection sur-mesure :\n\n- Nom: ${formData.fullName}\n- Tél: ${formData.phone}\n- Modèle de référence: ${formData.model}\n- Tissu souhaité: ${formData.fabric}\n\n*Mesures (en cm) :*\n- Longueur totale: ${formData.length || "Standard"} cm\n- Largeur épaules: ${formData.shoulders || "Standard"} cm\n- Largeur poitrine: ${formData.chest || "Standard"} cm\n\n*Notes/Détails additionnels :*\n${formData.notes || "Aucune note"}`;

    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank");

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container animate-fade-in" style={{ padding: "80px 24px", textAlign: "center", maxWidth: "600px" }}>
        <div style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "rgba(212, 175, 55, 0.1)",
          color: "var(--gold)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 32px",
          fontSize: "2.5rem"
        }}>
          ✓
        </div>
        <h1 className="title-font" style={{ fontSize: "2.2rem", marginBottom: "16px" }}>Demande Envoyée !</h1>
        <p style={{ color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "32px" }}>
          Votre fiche de mesures a été envoyée avec succès sur WhatsApp. Notre artisan-tailleur va examiner votre demande et vous recontacter sous 24h pour confirmer le modèle, le tissu et les délais de confection.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn btn-outline">
          Nouvelle Demande
        </button>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ padding: "60px 24px 100px" }}>
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h1 className="section-title">Service Sur Mesure</h1>
        <p className="section-subtitle">Une Jebba Confectionnée Pour Vous</p>
      </div>

      <div className="contact-grid">
        {/* Left Side: Services information */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px"
        }}>
          <div style={{
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            borderRadius: "8px",
            padding: "32px"
          }}>
            <h2 className="title-font" style={{ fontSize: "1.4rem", color: "var(--gold)", marginBottom: "16px" }}>L&apos;Excellence du Sur-Mesure</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "20px" }}>
              Pour que votre Jebba soit parfaite le jour J, la maison <strong>El Jebba</strong> met à votre disposition le savoir-faire de ses maîtres artisans tailleurs.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
              Nous cousons à vos dimensions exactes, ajustons la longueur globale et vous offrons le choix parmi notre catalogue de soie d&apos;Italie, de lin tunisien tissé main et de laine noble.
            </p>
          </div>

          <div style={{
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            borderRadius: "8px",
            padding: "32px"
          }}>
            <h3 className="title-font" style={{ fontSize: "1.2rem", color: "var(--gold)", marginBottom: "16px" }}>Comment prendre vos mesures ?</h3>
            <ol style={{
              color: "var(--text-secondary)",
              fontSize: "0.9rem",
              lineHeight: "1.6",
              paddingLeft: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}>
              <li>
                <strong>Longueur totale :</strong> Mesurez de la base de la nuque (au niveau du col) jusqu&apos;à la cheville ou le talon selon votre convenance.
              </li>
              <li>
                <strong>Carrure Épaules :</strong> Mesurez dans le dos, d&apos;une couture d&apos;épaule à l&apos;autre.
              </li>
              <li>
                <strong>Largeur Poitrine :</strong> Mesurez horizontalement au niveau de la partie la plus large de la poitrine.
              </li>
            </ol>
          </div>
        </div>

        {/* Right Side: Measurements Form */}
        <form onSubmit={handleCustomSubmit} style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          borderRadius: "8px",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>
          <h2 className="title-font" style={{ fontSize: "1.4rem", color: "var(--gold)", borderBottom: "1px solid var(--border-color)", paddingBottom: "12px" }}>
            Fiche de Mesures
          </h2>

          {/* Full Name */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label htmlFor="fullName" style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-secondary)" }}>
              Nom & Prénom <span style={{ color: "var(--danger)" }}>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Ex: Yassine Ben Salem"
              style={{
                padding: "10px 14px",
                borderRadius: "4px",
                backgroundColor: "var(--bg-tertiary)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                fontSize: "0.95rem",
                outline: "none"
              }}
            />
          </div>

          {/* Phone */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label htmlFor="phone" style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-secondary)" }}>
              Téléphone (WhatsApp) <span style={{ color: "var(--danger)" }}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Ex: +216 22 345 678"
              style={{
                padding: "10px 14px",
                borderRadius: "4px",
                backgroundColor: "var(--bg-tertiary)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                fontSize: "0.95rem",
                outline: "none"
              }}
            />
          </div>

          {/* Grid for Selection fields */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {/* Model Reference */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="model" style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-secondary)" }}>Modèle souhaité</label>
              <select
                id="model"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                style={{
                  padding: "10px 14px",
                  borderRadius: "4px",
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  outline: "none"
                }}
              >
                <option value="jebba-femme-olive">Jebba Olive Élégance</option>
                <option value="jebba-femme-blanche-or">Jebba Jasmine Blanche</option>
                <option value="jebba-femme-blanche-col-or">Jebba Médina Reine</option>
                <option value="jebba-femme-noire-tribale">Jebba Métisse Noire</option>
                <option value="jebba-femme-blanche-noire">Jebba Alyssa Bicolore</option>
                <option value="jebba-femme-emeraude">Jebba Émeraude Prestige</option>
                <option value="jebba-femme-bordeaux">Jebba Bordeaux Velours</option>
                <option value="jebba-femme-bleu-royal">Jebba Bleu Royal Majesté</option>
                <option value="jebba-femme-noire-calligraphie">Jebba Calligraphie Moderne</option>
                <option value="jebba-femme-bordeaux-fleurs">Jebba Bordeaux Fleuri</option>
                <option value="jebba-femme-beige">Jebba Beige Impériale</option>
                <option value="jebba-femme-rose">Jebba Rose Pastel Moderne</option>
                <option value="custom">Autre / Modèle personnalisé</option>
              </select>
            </div>

            {/* Fabric */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="fabric" style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-secondary)" }}>Type de Tissu</label>
              <select
                id="fabric"
                name="fabric"
                value={formData.fabric}
                onChange={handleInputChange}
                style={{
                  padding: "10px 14px",
                  borderRadius: "4px",
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  outline: "none"
                }}
              >
                <option value="soie-sauvage">Soie Sauvage</option>
                <option value="crepe-soie">Crêpe de Soie</option>
                <option value="lin">Lin Pur Tissé</option>
                <option value="laine-fine">Laine fine de Kairouan</option>
                <option value="mélange">Soie & Laine (Héritage)</option>
              </select>
            </div>
          </div>

          {/* Measurements grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
            {/* Length */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="length" style={{ fontSize: "0.8rem", fontWeight: "600", color: "var(--text-secondary)" }}>Longueur (cm)</label>
              <input
                type="number"
                id="length"
                name="length"
                placeholder="Ex: 140"
                value={formData.length}
                onChange={handleInputChange}
                style={{
                  padding: "10px",
                  borderRadius: "4px",
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  outline: "none"
                }}
              />
            </div>

            {/* Shoulders */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="shoulders" style={{ fontSize: "0.8rem", fontWeight: "600", color: "var(--text-secondary)" }}>Épaules (cm)</label>
              <input
                type="number"
                id="shoulders"
                name="shoulders"
                placeholder="Ex: 46"
                value={formData.shoulders}
                onChange={handleInputChange}
                style={{
                  padding: "10px",
                  borderRadius: "4px",
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  outline: "none"
                }}
              />
            </div>

            {/* Chest */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="chest" style={{ fontSize: "0.8rem", fontWeight: "600", color: "var(--text-secondary)" }}>Poitrine (cm)</label>
              <input
                type="number"
                id="chest"
                name="chest"
                placeholder="Ex: 58"
                value={formData.chest}
                onChange={handleInputChange}
                style={{
                  padding: "10px",
                  borderRadius: "4px",
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  outline: "none"
                }}
              />
            </div>
          </div>

          {/* Notes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label htmlFor="notes" style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-secondary)" }}>Détails de broderie ou demandes spéciales</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Précisez votre demande (couleurs de fils, doublure gilet, etc.)..."
              rows={3}
              style={{
                padding: "10px 14px",
                borderRadius: "4px",
                backgroundColor: "var(--bg-tertiary)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                fontSize: "0.95rem",
                outline: "none",
                resize: "vertical"
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ padding: "14px", marginTop: "8px" }}>
            Soumettre ma fiche de mesures sur WhatsApp
          </button>
        </form>
      </div>


    </div>
  );
}
