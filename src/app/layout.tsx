import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pokemon APP - Collection de Pokémon",
  description: "Explorez et collectionnez vos Pokémon préférés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-gray-150 text-gray-900 font-sans">
        <header className="p-4 bg-white shadow-md">
          <nav className="container mx-auto flex justify-between">
            <h1 className="text-xl font-bold">Pokemon APP</h1>
            <div>
              <a href="/browse" className="mr-4 text-blue-500">Browse</a>
              <a href="/collection" className="text-blue-500">My Collection</a>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
