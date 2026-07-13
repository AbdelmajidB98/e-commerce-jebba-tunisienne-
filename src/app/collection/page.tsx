"use client";

import React, { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Filter & Sort Products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (activeCategory !== "Tous") {
      result = result.filter(
        (product) => product.category === activeCategory
      );
    }

    // Filter by Search Query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.fabric.toLowerCase().includes(query)
      );
    }

    // Sort Products
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const categories = ["Tous", "Cérémonie", "Moderne", "Soie & Lin"];

  return (
    <div className="container animate-fade-in" style={{ padding: "60px 24px 100px" }}>
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span className="section-subtitle">Découvrez notre collection</span>
        <h1 className="section-title">Les Jebbas pour Femmes</h1>
      </div>

      {/* Filters and Controls */}
      <div className="collection-filter-panel">
        {/* Category Tabs */}
        <div className="filter-categories-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="btn"
              style={{
                padding: "8px 22px",
                fontSize: "0.85rem",
                borderRadius: "20px",
                border: activeCategory === cat ? "1px solid var(--gold)" : "1px solid var(--border-color)",
                backgroundColor: activeCategory === cat ? "var(--gold-light)" : "transparent",
                color: activeCategory === cat ? "var(--gold-dark)" : "var(--text-secondary)",
                transition: "var(--transition-fast)",
                letterSpacing: "1px",
                textTransform: "capitalize"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Sort Panel */}
        <div className="search-sort-panel" style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          flexGrow: 1,
          justifyContent: "flex-end"
        }}>
          {/* Search Box */}
          <div style={{
            position: "relative",
            minWidth: "220px",
            flexGrow: 1,
            maxWidth: "320px"
          }}>
            <input
              type="text"
              placeholder="Rechercher (soie, lin, broderie)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 16px 10px 40px",
                borderRadius: "20px",
                backgroundColor: "var(--bg-tertiary)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                fontSize: "0.9rem",
                outline: "none",
                transition: "var(--transition-fast)"
              }}
            />
            {/* Search Icon SVG */}
            <svg
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-secondary)"
              }}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          {/* Sort Selector */}
          <div style={{ position: "relative" }}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                appearance: "none",
                padding: "10px 40px 10px 20px",
                borderRadius: "20px",
                backgroundColor: "var(--bg-tertiary)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                fontSize: "0.9rem",
                outline: "none",
                cursor: "pointer"
              }}
            >
              <option value="default">Tri par défaut</option>
              <option value="price-asc">Prix : croissant</option>
              <option value="price-desc">Prix : décroissant</option>
            </select>
            <svg
              style={{
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                color: "var(--text-secondary)"
              }}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div style={{
          textAlign: "center",
          padding: "80px 0",
          color: "var(--text-secondary)"
        }}>
          <svg
            style={{ color: "var(--border-color)", marginBottom: "20px" }}
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          <p style={{ fontSize: "1.1rem" }}>Aucune Jebba ne correspond à vos critères.</p>
          <button
            onClick={() => {
              setActiveCategory("Tous");
              setSearchQuery("");
              setSortBy("default");
            }}
            className="btn btn-text"
            style={{ marginTop: "12px" }}
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
