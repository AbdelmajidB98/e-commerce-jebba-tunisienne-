"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  // Get 3 featured products to display on home page
  const featuredProducts = products.filter(
    (p) => p.id === "jebba-femme-olive" || p.id === "jebba-femme-blanche-col-or" || p.id === "jebba-femme-noire-tribale"
  );

  return (
    <div className="animate-fade-in">
      {/* HERO SECTION */}
      <section style={{
        position: "relative",
        height: "calc(100vh - var(--header-height))",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
        {/* Soft background glow circles */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "35vw",
          height: "35vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, rgba(0,0,0,0) 70%)",
          zIndex: 1
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, rgba(0,0,0,0) 70%)",
          zIndex: 1
        }}></div>

        <div className="container hero-grid">
          {/* Hero text */}
          <div className="hero-text" style={{ paddingRight: "20px" }}>
            <span style={{
              color: "var(--gold)",
              fontWeight: "600",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              display: "block",
              marginBottom: "20px"
            }}>
              Haute Couture Tunisienne Exclusivement Féminine
            </span>
            <h1 className="title-font" style={{
              fontSize: "clamp(2.5rem, 4.5vw, 4.2rem)",
              lineHeight: "1.1",
              fontWeight: "700",
              marginBottom: "24px",
              color: "var(--text-primary)"
            }}>
              Grâce & Élégance de la <br />
              <span style={{
                color: "transparent",
                backgroundImage: "linear-gradient(135deg, var(--gold) 30%, var(--text-primary) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                textShadow: "0 0 40px rgba(212, 175, 55, 0.1)"
              }}>Femme Tunisienne</span>
            </h1>
            <p style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: "1.7",
              marginBottom: "40px",
              maxWidth: "520px"
            }}>
              Maison de création artisanale spécialisée dans la Jebba traditionnelle tunisienne pour femme. Confectionnée dans des soies pures et lins fins, brodée minutieusement à la main.
            </p>
            <div className="btn-container" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <Link href="/collection" className="btn btn-primary">
                Découvrir la Collection
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Sur Mesure
              </Link>
            </div>
          </div>

          {/* Hero visual grid */}
          <div className="hero-visuals">
            <div style={{
              position: "relative",
              borderRadius: "4px",
              overflow: "hidden",
              height: "85%",
              marginTop: "auto",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              border: "1px solid var(--border-color)",
              transition: "var(--transition-luxury)"
            }} className="hero-img-hover">
              <Image
                src="/images/jebba-femme-olive-face.png"
                alt="Jebba Femme Olive Face"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div style={{
              position: "relative",
              borderRadius: "4px",
              overflow: "hidden",
              height: "85%",
              marginBottom: "auto",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              border: "1px solid var(--border-color)"
            }}>
              <Image
                src="/images/jebba-femme-blanche-or.jpg"
                alt="Jebba Femme Jasmine Blanche"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={{ padding: "120px 0", backgroundColor: "var(--bg-primary)" }}>
        <div className="container">
          <span className="section-subtitle">Les Plus Belles Broderies</span>
          <h2 className="section-title">Créations Emblématiques</h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "36px",
            marginTop: "20px"
          }}>
            {featuredProducts.map((product) => (
              <div key={product.id} className="animate-fade-in-up">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <Link href="/collection" className="btn btn-outline">
              Explorer toutes les créations
            </Link>
          </div>
        </div>
      </section>

      {/* HERITAGE SECTION */}
      <section id="heritage" style={{
        padding: "120px 0",
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)"
      }}>
        <div className="container heritage-grid">
          {/* Heritage Image */}
          <div className="heritage-image-container">
            <Image
              src="/images/jebba-femme-beige.png"
              alt="Héritage Artisanal Tunisien"
              fill
              style={{ objectFit: "cover" }}
            />
            {/* Elegant transparent overlay with description */}
            <div style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              background: "linear-gradient(transparent, rgba(255,255,255,0.98))",
              padding: "40px 32px 32px"
            }}>
              <h3 className="title-font" style={{ color: "var(--gold-dark)", fontSize: "1.4rem", marginBottom: "8px" }}>
                Un Ornement Ancestral
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.5" }}>
                Chaque encolure de nos Jebbas est ornée de &quot;Sfifa&quot;, un travail d&apos;orfèvre textile cousu patiemment fil par fil.
              </p>
            </div>
          </div>

          {/* Heritage Text */}
          <div className="heritage-text">
            <span style={{
              color: "var(--gold)",
              fontWeight: "600",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              display: "block",
              marginBottom: "12px"
            }}>
              Broderie & Confection à la Main
            </span>
            <h2 className="title-font" style={{
              fontSize: "2.6rem",
              fontWeight: "700",
              marginBottom: "24px",
              lineHeight: "1.2"
            }}>
              L&apos;Art du Savoir-Faire <br />
              de la Médina de Tunis
            </h2>
            <div style={{
              width: "40px",
              height: "2px",
              backgroundColor: "var(--gold)",
              marginBottom: "32px"
            }}></div>
            
            <p style={{
              color: "var(--text-secondary)",
              lineHeight: "1.8",
              marginBottom: "24px",
              fontSize: "1.05rem"
            }}>
              La Jebba est le vêtement d&apos;apparat tunisien par excellence. Symbole d&apos;élégance et de distinction, la Jebba pour femme est caractérisée par son tombé fluide, la finesse de ses étoffes de soie et ses encolures riches en broderies dorées complexes.
            </p>
            
            <p style={{
              color: "var(--text-secondary)",
              lineHeight: "1.8",
              marginBottom: "36px",
              fontSize: "1.05rem"
            }}>
              Nos maîtres artisans d&apos;ateliers tunisiens perpétuent la tradition. De la sélection minutieuse des fils de soie brute à la confection des précieux boutons tissés main (&quot;Guedla&quot;), chaque étape rend hommage à la splendeur de l&apos;artisanart tunisien.
            </p>

            <div style={{
              display: "flex",
              gap: "32px"
            }}>
              <div>
                <span className="title-font" style={{ fontSize: "2.2rem", color: "var(--gold)", fontWeight: "700", display: "block" }}>100%</span>
                <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>Féminin</span>
              </div>
              <div style={{ borderLeft: "1px solid var(--border-color)", paddingLeft: "32px" }}>
                <span className="title-font" style={{ fontSize: "2.2rem", color: "var(--gold)", fontWeight: "700", display: "block" }}>30h+</span>
                <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>Confection Main</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM ORDER CALL TO ACTION */}
      <section style={{
        padding: "120px 0",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Soft background glow */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, rgba(0,0,0,0) 70%)",
          zIndex: 1
        }}></div>

        <div className="container" style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "750px"
        }}>
          <span style={{
            color: "var(--gold)",
            fontWeight: "600",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontSize: "0.8rem",
            display: "block",
            marginBottom: "16px"
          }}>
            Pour Vos Cérémonies
          </span>
          <h2 className="title-font" style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: "24px"
          }}>
            Votre Jebba Sur-Mesure
          </h2>
          <p style={{
            color: "var(--text-secondary)",
            fontSize: "1.15rem",
            lineHeight: "1.7",
            marginBottom: "44px"
          }}>
            Pour les mariages, fiançailles ou soirées d&apos;exception, confiez-nous vos mesures. Nos stylistes et artisans broderont à votre convenance les motifs de votre choix pour créer la Jebba de vos rêves.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Remplir ma Fiche de Mesures
          </Link>
        </div>
      </section>
    </div>
  );
}
