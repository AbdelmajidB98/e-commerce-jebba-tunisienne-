"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "var(--bg-secondary)",
      borderTop: "1px solid var(--border-color)",
      padding: "64px 0 24px",
      marginTop: "auto"
    }}>
      <div className="container" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "40px",
        marginBottom: "48px"
      }}>
        {/* About Section */}
        <div>
          <h3 className="title-font" style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            marginBottom: "20px",
            color: "var(--text-primary)"
          }}>
            EL <span style={{ color: "var(--gold)" }}>JEBBA</span>
          </h3>
          <p style={{
            color: "var(--text-secondary)",
            fontSize: "0.95rem",
            lineHeight: "1.6",
            marginBottom: "20px"
          }}>
            Maison de haute couture traditionnelle tunisienne. Nous célébrons l&apos;art ancestral de la Jebba à travers des créations uniques, alliant la noblesse des tissus à la finesse des broderies à la main.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="title-font" style={{
            fontSize: "1.1rem",
            fontWeight: "600",
            marginBottom: "20px",
            color: "var(--gold)",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}>
            Navigation
          </h4>
          <ul style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            fontSize: "0.95rem",
            color: "var(--text-secondary)"
          }}>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/collection">Nos Collections</Link></li>
            <li><Link href="/#heritage">Le Savoir-Faire</Link></li>
            <li><Link href="/contact">Commandes sur Mesure</Link></li>
          </ul>
        </div>

        {/* Showrooms Section */}
        <div>
          <h4 className="title-font" style={{
            fontSize: "1.1rem",
            fontWeight: "600",
            marginBottom: "20px",
            color: "var(--gold)",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}>
            Nos Ateliers & Boutiques
          </h4>
          <ul style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            fontSize: "0.95rem",
            color: "var(--text-secondary)",
            lineHeight: "1.5"
          }}>
            <li>
              <strong>Médina de Tunis :</strong><br />
              12 Rue des Libraires, Tunis
            </li>
            <li>
              <strong>La Marsa :</strong><br />
              Avenue Habib Bourguiba, Tunis
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="title-font" style={{
            fontSize: "1.1rem",
            fontWeight: "600",
            marginBottom: "20px",
            color: "var(--gold)",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}>
            Nous Contacter
          </h4>
          <ul style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            fontSize: "0.95rem",
            color: "var(--text-secondary)"
          }}>
            <li>
              <strong>Téléphone / WhatsApp :</strong><br />
              +216 98 765 432
            </li>
            <li>
              <strong>E-mail :</strong><br />
              contact@eljebba.tn
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container" style={{
        borderTop: "1px solid var(--border-color)",
        paddingTop: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
        fontSize: "0.85rem",
        color: "var(--text-muted)"
      }}>
        <p>&copy; {new Date().getFullYear()} El Jebba Tunisienne. Tous droits réservés.</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="WhatsApp">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
