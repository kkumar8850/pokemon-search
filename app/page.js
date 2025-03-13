"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PokemonCard from "@/app/component/PokemonCard";
import NotFound from "./component/NotFound";
import Loading from "./component/loading";
import { IconSearch } from "@tabler/icons-react";

export default function Home() {
  const searchParams = useSearchParams();
  const typeFromUrl = searchParams?.get("type") || "";
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const router = useRouter();

  // Fetch all Pokémon types
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => setTypes(data.results));
  }, []);

  const handleType = (e) => {
    if (e.target.value) {
      router.push(`/?type=${e.target.value}`);
    } else {
      router.push("/");
    }
  };

  // Fetch Pokémon based on type
  const fetchPokemonByType = async (type) => {
    setSelectedType(type);
    setLoading(true);
    const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    if(res.ok){
      const data = await res.json();
      setLoading(false);
      setError((false))
      setPokemonList(data.pokemon.map((p) => p.pokemon)); // Extract Pokémon list
    }else{
      setError(true)
      setLoading(false)
    }
  };

  useEffect(() => {
    if (typeFromUrl) {
      fetchPokemonByType(typeFromUrl);
    } else {
      setPokemonList([]);
      setSelectedType("");
    }
  }, [typeFromUrl]);

  const handlePokemonNameChange = (e) => {
    setPokemonName(e.target.value);
  };

  return (
    <div className="bg-[#f0f0f0] min-h-[100vh]">
      <div className="sticky top-0 bg-[#f0f0f0] pb-4 z-10">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Pokemon Search</h1>

          <select
            className="p-2 border rounded-lg w-full sm:w-auto mr-2"
            onChange={handleType}
            value={selectedType}
          >
            <option value="">Select Pokemon Type</option>
            {types.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
          {selectedType && (
            <div className="relative inline-block w-full mt-4 sm:w-auto sm:mt-0">
              <IconSearch className="absolute inset-y-0 left-3 top-2 flex items-center text-gray-500" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={pokemonName}
                onChange={handlePokemonNameChange}
                placeholder="Search by name"
              />
            </div>
          )}
        </div>
        </div>
      <div className="container mx-auto p-4 ">
        {loading ? (
          <Loading />
        ) : (
          <>
          {
            error
            ?
            <NotFound text="Please select valid pokemon type from the list"/>
            :
            <div>
              {pokemonList?.length > 0 ? (
                <div className="mt-4 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-4">
                  {pokemonList
                    .filter((i) => i.name.includes(pokemonName))
                    .map((pokemon) => (
                      <PokemonCard key={pokemon.name} data={pokemon} />
                    ))}
                </div>
              ) : (
                <div className="">
                  <NotFound />
                </div>
              )}
            </div>
          }
          </>
        )}
        {
          pokemonName && !pokemonList
          .filter((i) => i.name.includes(pokemonName)).length > 0 &&(
            <NotFound text="No Pokemon found with search name"/>
          )
        }
      </div>
    </div>
  );
}
