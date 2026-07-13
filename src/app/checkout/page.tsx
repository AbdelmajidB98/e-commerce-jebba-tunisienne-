"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "Tunis",
    address: "",
    notes: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState<any>(null);

  const tunisianCities = [
    "Tunis", "Ariana", "Ben Arous", "Manouba", "Bizerte", "Nabeul", 
    "Sousse", "Monastir", "Mahdia", "Sfax", "Gabes", "Medenine", 
    "Tataouine", "Gafsa", "Tozeur", "Kebili", "Kasserine", "Sidi Bouzid", 
    "Kairouan", "Siliana", "Kef", "Jendouba", "Beja", "Zaghouan"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = "21698765432"; // Mock shop WhatsApp number
    
    // Build order text summary
    let itemsText = "";
    cartItems.forEach((item) => {
      itemsText += `- ${item.name} (Taille: ${item.size}, Qté: ${item.quantity}) - ${item.price * item.quantity} DT\n`;
    });

    const message = `Bonjour El Jebba,\n\nJe souhaite passer la commande suivante :\n\n*Articles:*\n${itemsText}\n*Total:* ${cartTotal} DT\n\n*Informations client:*\n- Nom: ${formData.fullName}\n- Tél: ${formData.phone}\n- Ville: ${formData.city}\n- Adresse: ${formData.address}\n${formData.notes ? `- Notes: ${formData.notes}\n` : ""}\nMerci de confirmer la disponibilité et le délai de livraison.`;
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // Save order data for preview on success page
    const orderDetails = {
      items: [...cartItems],
      total: cartTotal,
      customer: { ...formData },
      id: Math.floor(100000 + Math.random() * 900000),
    };
    
    setSubmittedOrder(orderDetails);
    setOrderPlaced(true);

    // Redirect to WhatsApp in a new tab if WhatsApp order was chosen
    const link = generateWhatsAppLink();
    window.open(link, "_blank");

    // Clear local shopping cart
    clearCart();
  };

  if (orderPlaced && submittedOrder) {
    return (
      <div className="container animate-fade-in" style={{ padding: "80px 24px", textAlign: "center", maxWidth: "600px" }}>
        <div style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "rgba(46, 196, 182, 0.1)",
          color: "var(--success)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 32px",
          fontSize: "2.5rem"
        }}>
          ✓
        </div>
        <h1 className="title-font" style={{ fontSize: "2.2rem", marginBottom: "16px" }}>Merci pour votre commande !</h1>
        <p style={{ color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "32px" }}>
          Votre commande <strong>#{submittedOrder.id}</strong> a été enregistrée avec succès. Nous vous avons également redirigé vers WhatsApp pour finaliser instantanément la livraison avec notre conseiller.
        </p>

        {/* Order Details box */}
        <div style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          borderRadius: "8px",
          padding: "24px",
          textAlign: "left",
          marginBottom: "40px"
        }}>
          <h3 className="title-font" style={{ color: "var(--gold)", fontSize: "1.1rem", marginBottom: "16px", textTransform: "uppercase" }}>Récapitulatif de la commande</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {submittedOrder.items.map((item: any) => (
              <div key={`${item.id}-${item.size}`} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.95rem" }}>
                <span>{item.name} <span style={{ color: "var(--text-secondary)" }}>(Taille {item.size} x{item.quantity})</span></span>
                <span>{item.price * item.quantity} DT</span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "12px", marginTop: "4px", display: "flex", justifyContent: "space-between", fontWeight: "700" }}>
              <span>Total</span>
              <span style={{ color: "var(--gold)" }}>{submittedOrder.total} DT</span>
            </div>
          </div>
          
          <h3 className="title-font" style={{ color: "var(--gold)", fontSize: "1.1rem", marginTop: "24px", marginBottom: "16px", textTransform: "uppercase" }}>Adresse de livraison</h3>
          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
            {submittedOrder.customer.fullName}<br />
            {submittedOrder.customer.address}, {submittedOrder.customer.city}<br />
            Tunisie<br />
            Tél : {submittedOrder.customer.phone}
          </p>
        </div>

        <Link href="/" className="btn btn-primary">
          Retourner à l&apos;accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ padding: "60px 24px 100px" }}>
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h1 className="section-title">Finaliser la Commande</h1>
        <p className="section-subtitle">Paiement Cash à la Livraison</p>
      </div>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-secondary)" }}>
          <p style={{ fontSize: "1.1rem", marginBottom: "24px" }}>Votre panier est actuellement vide.</p>
          <Link href="/collection" className="btn btn-primary">
            Voir les collections
          </Link>
        </div>
      ) : (
        <div className="checkout-grid">
          {/* Left Side: Billing/Shipping Form */}
          <form onSubmit={handleSubmit} className="checkout-form">
            <h2 className="title-font" style={{ fontSize: "1.4rem", color: "var(--gold)", borderBottom: "1px solid var(--border-color)", paddingBottom: "12px" }}>
              Informations de Livraison
            </h2>

            {/* Full Name */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="fullName" style={{ fontSize: "0.9rem", fontWeight: "600", color: "var(--text-secondary)" }}>
                Nom & Prénom <span style={{ color: "var(--danger)" }}>*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Ex: Mohamed Ali"
                style={{
                  padding: "12px 16px",
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
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="phone" style={{ fontSize: "0.9rem", fontWeight: "600", color: "var(--text-secondary)" }}>
                Numéro de Téléphone <span style={{ color: "var(--danger)" }}>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Ex: +216 98 765 432"
                style={{
                  padding: "12px 16px",
                  borderRadius: "4px",
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  outline: "none"
                }}
              />
            </div>

            {/* City */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="city" style={{ fontSize: "0.9rem", fontWeight: "600", color: "var(--text-secondary)" }}>
                Gouvernorat / Ville <span style={{ color: "var(--danger)" }}>*</span>
              </label>
              <div style={{ position: "relative" }}>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    appearance: "none",
                    padding: "12px 16px",
                    borderRadius: "4px",
                    backgroundColor: "var(--bg-tertiary)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                    fontSize: "0.95rem",
                    outline: "none",
                    cursor: "pointer"
                  }}
                >
                  {tunisianCities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
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
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>

            {/* Address */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="address" style={{ fontSize: "0.9rem", fontWeight: "600", color: "var(--text-secondary)" }}>
                Adresse de Livraison <span style={{ color: "var(--danger)" }}>*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Ex: 14 Rue de la Liberté, Appt 3"
                style={{
                  padding: "12px 16px",
                  borderRadius: "4px",
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  outline: "none"
                }}
              />
            </div>

            {/* Notes */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="notes" style={{ fontSize: "0.9rem", fontWeight: "600", color: "var(--text-secondary)" }}>
                Instructions Particulières (Ex: longueur des manches souhaitée, horaire de livraison...)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Ajoutez vos précisions ici..."
                rows={4}
                style={{
                  padding: "12px 16px",
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

            <button type="submit" className="btn btn-primary" style={{ padding: "16px", marginTop: "12px" }}>
              Confirmer la commande sur WhatsApp
            </button>
          </form>

          {/* Right Side: Order Recap Panel */}
          <div className="checkout-recap">
            <div className="checkout-recap-box">
              <h2 className="title-font" style={{ fontSize: "1.4rem", color: "var(--gold)", borderBottom: "1px solid var(--border-color)", paddingBottom: "12px", marginBottom: "24px" }}>
                Articles de ma commande
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.size}`} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                    <div style={{
                      position: "relative",
                      width: "60px",
                      height: "80px",
                      borderRadius: "4px",
                      overflow: "hidden",
                      border: "1px solid var(--border-color)"
                    }}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "4px" }}>{item.name}</h3>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Taille: {item.size} | Qté: {item.quantity}</span>
                    </div>
                    <span style={{ fontWeight: "600", color: "var(--gold)" }}>{item.price * item.quantity} DT</span>
                  </div>
                ))}
              </div>

              {/* Price calculations */}
              <div style={{
                borderTop: "1px solid var(--border-color)",
                paddingTop: "24px",
                marginTop: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  <span>Sous-total</span>
                  <span>{cartTotal} DT</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  <span>Livraison</span>
                  <span style={{ color: "var(--success)" }}>Gratuite</span>
                </div>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  borderTop: "1px solid var(--border-color)",
                  paddingTop: "16px",
                  marginTop: "8px"
                }}>
                  <span>Total</span>
                  <span style={{ color: "var(--gold)" }}>{cartTotal} DT</span>
                </div>
              </div>
            </div>

            {/* Payment method information banner */}
            <div style={{
              backgroundColor: "rgba(212, 175, 55, 0.03)",
              border: "1px dashed var(--gold)",
              borderRadius: "8px",
              padding: "24px",
              display: "flex",
              gap: "16px"
            }}>
              <div style={{ color: "var(--gold)", fontSize: "1.5rem" }}>ℹ</div>
              <div style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                <strong style={{ color: "var(--gold)" }}>Mode de paiement :</strong><br />
                Nous proposons uniquement le **Paiement Cash à la Livraison (Contre Remboursement)**. Vous vérifiez votre commande auprès du livreur et payez en espèces à la livraison.
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 900px) {
          .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .container > div:nth-child(2) > form {
            order: 2;
          }
        }
      `}</style>
    </div>
  );
}
