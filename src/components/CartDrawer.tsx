"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    cartItems,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const drawerRef = useRef<HTMLDivElement>(null);

  // Close cart drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  return (
    <>
      {/* Overlay Background */}
      <div
        className={`cart-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Cart Slider Drawer */}
      <div
        ref={drawerRef}
        className={`cart-drawer ${isCartOpen ? "open" : ""}`}
        aria-modal="true"
        role="dialog"
      >
        <div className="cart-header">
          <h2>Mon Panier</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="cart-close-btn"
            aria-label="Close cart"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Cart Contents */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <svg
                className="cart-empty-icon"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p>Votre panier est vide</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline"
                style={{ marginTop: "8px" }}
              >
                Continuer mes achats
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className="cart-item">
                {/* Thumbnail Image */}
                <div className="cart-item-img">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="80px"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Details */}
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <span className="cart-item-meta">
                    Catégorie: {item.category} | Taille: {item.size}
                  </span>
                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      color: "var(--gold)",
                      marginBottom: "8px",
                    }}
                  >
                    {item.price} DT
                  </span>

                  <div className="cart-item-actions">
                    {/* Quantity Selector */}
                    <div className="quantity-controller">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity - 1)
                        }
                        className="quantity-btn"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="quantity-val">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity + 1)
                        }
                        className="quantity-btn"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Delete Item */}
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="cart-item-remove"
                      aria-label="Remove item"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span className="cart-total-label">Sous-total</span>
              <span className="cart-total-price">{cartTotal} DT</span>
            </div>
            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--text-secondary)",
                marginBottom: "16px",
                lineHeight: "1.4",
              }}
            >
              Frais de livraison estimés à la commande.
            </p>
            <Link
              href="/checkout"
              className="btn btn-primary cart-checkout-btn"
              onClick={() => setIsCartOpen(false)}
            >
              Passer la commande
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
