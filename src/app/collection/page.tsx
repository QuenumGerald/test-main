"use client";

import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

export default function Collection() {
  const [collection, setCollection] = useState<{ name: string; url: string }[]>([]);
  const [notification, setNotification] = useState<string | null>(null);


  useEffect(() => {
    const storedCollection = JSON.parse(localStorage.getItem("collection") || "[]");
    setCollection(storedCollection);
  }, []);

  const removeFromCollection = (name: string) => {
    const updatedCollection = collection.filter((pokemon) => pokemon.name !== name);
    setCollection(updatedCollection);
    localStorage.setItem("collection", JSON.stringify(updatedCollection));

    setNotification(`${name} retiré de la collection!`);

    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl mb-4">My Collection</h1>

            {/* Notification Message */}
            {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-2 rounded-md shadow-md">
          {notification}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {collection.map((pokemon, index) => (
          <PokemonCard
            key={index}
            pokemon={pokemon}
            onActionClick={() => removeFromCollection(pokemon.name)}
            actionLabel="Remove"
          />
        ))}
      </div>
    </main>
  );
}
