"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Use first image as main thumbnail
  const mainImage = product.images[0];

  return (
    <Link href={`/product/${product.id}`} className="product-card">
      {/* Tag Badge */}
      {product.tag && (
        <span className="product-badge">{product.tag}</span>
      )}

      {/* Image Container */}
      <div className="product-image-container">
        <Image
          src={mainImage}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="product-image"
          priority={product.id === "jebba-femme-olive"}
        />
      </div>

      {/* Product Details */}
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price} DT</p>
      </div>
    </Link>
  );
}
