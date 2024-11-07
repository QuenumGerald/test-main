"use client";

import { useEffect, useState } from "react";
import { PokemonClient } from "pokenode-ts";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";

export default function Browse() {
  const [pokemonList, setPokemonList] = useState<{ name: string; url: string }[]>([]);
  const [page, setPage] = useState(0);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      const api = new PokemonClient();
      const data = await api.listPokemons(page * 20, 20);
      setPokemonList(data.results);
    };

    fetchPokemons();
  }, [page]);

  const addToCollection = (pokemon: { name: string; url: string }) => {
    const collection = JSON.parse(localStorage.getItem("collection") || "[]");
    collection.push(pokemon);
    localStorage.setItem("collection", JSON.stringify(collection));

    // Afficher le message de confirmation
    setNotification(`${pokemon.name} ajouté à la collection!`);

    // Supprimer le message après 3 secondes
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl mb-4">Browse Page</h1>

      {/* Notification Message */}
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-2 rounded-md shadow-md">
          {notification}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard
            key={index}
            pokemon={pokemon}
            onActionClick={() => addToCollection(pokemon)}
            actionLabel="Add"
          />
        ))}
      </div>
      <Pagination currentPage={page} onPageChange={setPage} />
    </main>
  );
}
