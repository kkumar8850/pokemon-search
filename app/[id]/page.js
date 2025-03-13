import BackButton from "@/app/component/BackButton";
import PokemonImage from "@/app/component/PokemonImage";
import PokemonFullDetails from "../component/PokemonFullDetails";
import NotFound from "../component/NotFound";

export default async function PokemonDetail({ params }) {
  const { id } = await params;
  try{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    if (!res.ok) throw new Error("Pokémon not found");
    const pokemon = await res.json()

    return (
      <div className="flex  items-center min-h-screen p-4 bg-gray-100 flex-col ">
        <BackButton/>
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="flex justify-center bg-[#60e2c9]">
            <PokemonImage pokemon={pokemon} />
          </div>

          {/* Details Section */}
          <PokemonFullDetails 
            pokemon={pokemon}
          />
        </div>
      </div>
  );
  }catch(error){
    return (
      <div>
        <NotFound text="No Pokemon found." back={true}/>
      </div>
    );
  }
}
