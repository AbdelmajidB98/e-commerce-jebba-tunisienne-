import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Toast from "@/components/Toast";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Maison El Jebba | Haute Couture Traditionnelle Tunisienne",
  description: "Découvrez notre collection exclusive de Jebbas tunisiennes traditionnelles et modernes pour hommes et femmes. Tissus nobles en soie sauvage, lin, laine et broderies fines faites main par nos artisans à Tunis.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
        <CartProvider>
          <Header />
          <main style={{ flex: "1 0 auto", paddingTop: "var(--header-height)" }}>
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
