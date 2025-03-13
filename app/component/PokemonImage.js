'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Fallback from '@/public/pokeball.png'

const PokemonImage = ({pokemon}) => {
    const [imgSrc, setImgSrc] = useState(null)

    useEffect(()=> {
        setImgSrc(pokemon?.sprites?.other["official-artwork"]?.front_default || null)
    },[])
    return (
        <Image
            src={imgSrc || Fallback}
            alt={pokemon.name}
            className="w-48 h-48 md:w-64 md:h-64 m-auto"
            width={250}
            height={250}
            loading="lazy"
            onError={()=> setImgSrc(Fallback)}
        />
    )
}
export default PokemonImage;