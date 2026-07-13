"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const { id } = use(params);
  const { addToCart, setIsCartOpen } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Veuillez sélectionner une taille.");
      return;
    }
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.images[0],
      category: product.category,
    });
    setIsCartOpen(true);
  };

  return (
    <div className="animate-fade-in" style={{ padding: "60px 0 100px" }}>
      <div className="container">
        {/* Breadcrumbs */}
        <div style={{ marginBottom: "32px", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
          <Link href="/" style={{ color: "var(--text-secondary)" }}>Accueil</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/collection" style={{ color: "var(--text-secondary)" }}>Collection</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "var(--gold)" }}>{product.name}</span>
        </div>

        {/* Product presentation */}
        <div className="detail-grid">
          {/* Left Column: Image Gallery */}
          <div className="detail-gallery">
            {/* Main view window */}
            <div className="detail-main-img">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Thumbnail row (only if multiple images exist) */}
            {product.images.length > 1 && (
              <div className="detail-thumbs-row">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    style={{
                      position: "relative",
                      width: "80px",
                      height: "107px",
                      borderRadius: "4px",
                      overflow: "hidden",
                      border: activeImage === img ? "2px solid var(--gold)" : "1px solid var(--border-color)",
                      backgroundColor: "var(--bg-secondary)",
                      transition: "var(--transition-fast)"
                    }}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      sizes="80px"
                      style={{ objectFit: "cover" }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Info & Action panel */}
          <div className="detail-info">
            {/* Badge & Category */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
              <span style={{
                color: "var(--gold)",
                fontWeight: "600",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontSize: "0.85rem",
              }}>
                {product.category}
              </span>
              {product.tag && (
                <span style={{
                  backgroundColor: "rgba(212, 175, 55, 0.1)",
                  color: "var(--gold)",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  textTransform: "uppercase"
                }}>
                  {product.tag}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="title-font" style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "16px",
              lineHeight: "1.2"
            }}>
              {product.name}
            </h1>

            {/* Price */}
            <p style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              color: "var(--gold)",
              marginBottom: "32px"
            }}>
              {product.price} DT
            </p>

            {/* Description */}
            <p style={{
              color: "var(--text-secondary)",
              lineHeight: "1.6",
              marginBottom: "32px",
              fontSize: "1.05rem"
            }}>
              {product.description}
            </p>

            {/* Structured Specifications */}
            <div style={{
              backgroundColor: "var(--bg-secondary)",
              borderRadius: "8px",
              border: "1px solid var(--border-color)",
              padding: "20px",
              marginBottom: "32px"
            }}>
              <div style={{ display: "flex", marginBottom: "12px", borderBottom: "1px solid var(--border-color)", paddingBottom: "12px" }}>
                <span style={{ width: "120px", fontWeight: "600", color: "var(--text-secondary)" }}>Matière</span>
                <span style={{ color: "var(--text-primary)" }}>{product.fabric}</span>
              </div>
              <div style={{ display: "flex", marginBottom: "12px", borderBottom: "1px solid var(--border-color)", paddingBottom: "12px" }}>
                <span style={{ width: "120px", fontWeight: "600", color: "var(--text-secondary)" }}>Broderie</span>
                <span style={{ color: "var(--text-primary)" }}>{product.embroidery}</span>
              </div>
              <div style={{ display: "flex" }}>
                <span style={{ width: "120px", fontWeight: "600", color: "var(--text-secondary)" }}>Détails</span>
                <span style={{ color: "var(--text-primary)", fontSize: "0.95rem" }}>{product.details}</span>
              </div>
            </div>

            {/* Size Selector */}
            <div style={{ marginBottom: "40px" }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px"
              }}>
                <span style={{ fontWeight: "600", fontSize: "0.95rem" }}>Sélectionner une taille</span>
                <button
                  onClick={() => setIsSizeModalOpen(true)}
                  style={{
                    color: "var(--gold)",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    textDecoration: "underline",
                  }}
                >
                  Guide des tailles
                </button>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "4px",
                      border: selectedSize === size ? "2px solid var(--gold)" : "1px solid var(--border-color)",
                      backgroundColor: selectedSize === size ? "var(--gold-light)" : "transparent",
                      color: selectedSize === size ? "var(--gold-dark)" : "var(--text-primary)",
                      fontWeight: "600",
                      transition: "var(--transition-fast)"
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button
                onClick={handleAddToCart}
                className="btn btn-primary"
                style={{ flexGrow: 1, padding: "16px 32px" }}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sizing Modal */}
      <div className={`modal-overlay ${isSizeModalOpen ? "open" : ""}`} onClick={() => setIsSizeModalOpen(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={() => setIsSizeModalOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <h2 className="title-font" style={{ fontSize: "1.8rem", color: "var(--gold)", marginBottom: "16px", borderBottom: "1px solid var(--border-color)", paddingBottom: "12px" }}>
            Guide des Tailles - Jebba
          </h2>
          
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.5", marginBottom: "20px" }}>
            La Jebba traditionnelle tunisienne se porte généralement ample et confortable. Voici les dimensions indicatives en centimètres pour vous guider dans votre choix :
          </p>

          <div className="size-table-container">
            <table className="size-table">
              <thead>
                <tr>
                  <th>Taille</th>
                  <th>Longueur Totale</th>
                  <th>Largeur Poitrine</th>
                  <th>Carrure Épaules</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>S</strong></td>
                  <td>135 cm</td>
                  <td>54 cm</td>
                  <td>44 cm</td>
                </tr>
                <tr>
                  <td><strong>M</strong></td>
                  <td>140 cm</td>
                  <td>58 cm</td>
                  <td>46 cm</td>
                </tr>
                <tr>
                  <td><strong>L</strong></td>
                  <td>145 cm</td>
                  <td>62 cm</td>
                  <td>48 cm</td>
                </tr>
                <tr>
                  <td><strong>XL</strong></td>
                  <td>150 cm</td>
                  <td>66 cm</td>
                  <td>50 cm</td>
                </tr>
                <tr>
                  <td><strong>XXL</strong></td>
                  <td>152 cm</td>
                  <td>70 cm</td>
                  <td>52 cm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{
            marginTop: "24px",
            padding: "16px",
            backgroundColor: "var(--bg-tertiary)",
            borderRadius: "6px",
            borderLeft: "3px solid var(--gold)"
          }}>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
              <strong>Remarque :</strong> Si vous hésitez entre deux tailles ou si vous souhaitez adapter la longueur, nous proposons un service de confection sur-mesure gratuit. Rendez-vous sur notre page <Link href="/contact" style={{ color: "var(--gold)", textDecoration: "underline" }}>Sur Mesure</Link> pour plus de détails.
            </p>
          </div>
        </div>
      </div>


    </div>
  );
}
