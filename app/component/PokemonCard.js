import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Fallback from "@/public/pokeball.png";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const PokemonCard = ({ data }) => {
  const [imgSrc, setImgSrc] = useState(Fallback);

  useEffect(() => {
    const pokemonSplit = data?.url?.split("/");
    const pokemonId = pokemonSplit[pokemonSplit.length - 2];
    setImgSrc(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
    );
  }, []);
  return (
    <div
      className="bg-[#fff] shadow-lg rounded-xl flex flex-col items-center 
                         hover:scale-105 transition-transform overflow-hidden"
    >
      <div>
        <Image
          src={imgSrc || null}
          width={100}
          height={100}
          alt={data.name}
          className="m-auto"
          loading="lazy"
          onError={() => setImgSrc(Fallback)}
        />
      </div>
      <div className="bg-[#fafafa] w-full p-4 h-[100px] flex flex-col justify-between">
        <p className="font-semibold">{data.name}</p>
        <Link
          href={`/${data.name}`}
          className="flex items-center text-sm text-blue-500"
        >
          Details <IconArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
