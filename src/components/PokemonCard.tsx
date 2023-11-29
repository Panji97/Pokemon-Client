// PokemonCard.tsx
import React from 'react'

interface PokemonCardProps {
  name: string
  japaneseName: string
  totalPoints: number
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, japaneseName, totalPoints }) => {
  return (
    <div className="pokemon-card max-w-md mx-auto overflow-hidden rounded-md shadow-md bg-black">
      <div className="bg-gradient-to-r from-pink-400 to-purple-500">
        <h2 className="text-xl font-semibold text-white p-4">{name}</h2>
      </div>
      <div className="p-4">
        <p className="text-2xl font-semi mb-4">{japaneseName}</p>
        <p className="text-lg font-bold">Total Points: {totalPoints}</p>
      </div>
    </div>
  )
}

export default PokemonCard
