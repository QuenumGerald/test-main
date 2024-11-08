"use client";

import { useEffect, useState } from "react";
import { PokemonClient } from "pokenode-ts";
import PokemonCard from "./components/PokemonCard"; 

export default function Home() {
  const [pokemonList, setPokemonList] = useState<{ name: string; url: string }[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const api = new PokemonClient();
      const data = await api.listPokemons(0, 10); 
      setPokemonList(data.results);
    };
    
    fetchPokemons();
  }, []);

  const addToCollection = (pokemon: { name: string; url: string }) => {
    const collection = JSON.parse(localStorage.getItem("collection") || "[]");
    collection.push(pokemon);
    localStorage.setItem("collection", JSON.stringify(collection));
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl mb-4">Poke APP</h1>
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
    </main>
  );
}
