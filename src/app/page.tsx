import { PokemonClient } from "pokenode-ts";

export default async function Home() {
  const api = new PokemonClient(); // create a PokemonClient

  const pokemonList = await api.listPokemons(0, 10);

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1>Poke APP</h1>
    </main>
  );
}
