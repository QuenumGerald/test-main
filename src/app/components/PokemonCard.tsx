import { useState } from "react";

type PokemonCardProps = {
  pokemon: { name: string; url: string };
  onActionClick: () => void;
  actionLabel: string;
};

const PokemonCard = ({ pokemon, onActionClick, actionLabel }: PokemonCardProps) => {
  const pokemonId = pokemon.url.split("/").filter(Boolean).pop();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onActionClick();


    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <div className="border rounded-xl p-4 text-center bg-white shadow">
      <div className="mb-2 h-24 w-24 mx-auto">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          alt={pokemon.name}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex items-center justify-center space-x-2 mt-2">
        <p className="text-lg font-semibold capitalize">{pokemon.name}</p>
        <button 
          onClick={handleClick}
          className={`py-1 px-3 rounded ${
            isClicked ? "bg-green-700" : "bg-blue-500"
          } text-white transition-colors duration-700`}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}

export default PokemonCard;
