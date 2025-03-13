"use client";
import React from "react";
import PokemonBall from "@/public/pokeball.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IconChevronLeft } from "@tabler/icons-react";

const NotFound = ({ text, back }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="w-full text-center">
      <Image
        src={PokemonBall}
        height={300}
        width={300}
        alt="pokeball"
        className="m-auto"
      />
      <p className="text-2xl font-bold text-center">
        {text || "Select your favourite pokemon type"}
      </p>
      {back ? (
        <button
          onClick={handleBack}
          className="flex cursor-pointer text-blue-400 m-auto"
        >
          <IconChevronLeft /> Back
        </button>
      ) : null}
    </div>
  );
};

export default NotFound;
