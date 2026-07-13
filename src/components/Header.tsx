"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Collection", path: "/collection" },
    { name: "Notre Héritage", path: "/#heritage" },
    { name: "Sur Mesure & Contact", path: "/contact" },
  ];

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container header-container">
        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          style={{ order: isMenuOpen ? 2 : 0 }}
        >
          <span style={{ transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "" }}></span>
          <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
          <span style={{ transform: isMenuOpen ? "rotate(-45deg) translate(6px, -7px)" : "" }}></span>
        </button>

        {/* Logo */}
        <Link href="/" className="logo">
          EL <span>JEBBA</span>
        </Link>

        {/* Navigation links */}
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {navLinks.map((link) => {
            const isActive =
              link.path === "/"
                ? pathname === "/"
                : pathname.startsWith(link.path) || (link.path.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Cart Icon & Actions */}
        <div className="header-actions">
          <button
            onClick={() => setIsCartOpen(true)}
            className="cart-icon-btn"
            aria-label="Open cart"
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
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
