import React from "react";

const PokemonFullDetails = ({pokemon}) => {
  return (
    <div className="p-6 bg-[#fdc666] max-h-[50vh] overflow-auto">
      <p className="text-sm mb-1">
        <b>Name</b> : {pokemon.name}
      </p>
      <p className="text-sm mb-1">
        <b>Type</b> : {pokemon?.types?.map((i) => i.type.name).join(", ")}
      </p>
      <p className="text-sm mb-1">
        <b>Stats</b> : {pokemon.stats?.map((i) => i.stat.name).join(", ")}
      </p>
      <p className="text-sm mb-1">
        <b>Abilities</b> :{" "}
        {pokemon.abilities?.map((i) => i.ability.name).join(", ")}
      </p>
      <p className="text-sm">
        <b>Some Moves</b> : {pokemon.moves?.map((i) => i.move.name).join(", ")}
      </p>
    </div>
  );
};

export default PokemonFullDetails;
