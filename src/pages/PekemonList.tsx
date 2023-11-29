// PokemonList.tsx
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { pokemonStatisticType1, pokemonStatisticType2, pokemonTop5, showAllPokemon, showPokemonById } from '../data/pokemonApi'
import { setDataPokemon, setStatisticType1, setStatisticType2, setTop5Pokemon } from '../features/pokemonSlice'
import Modal from '../components/Modal'
import PokemonPieChart from '../components/PokemonPieChart'
import PokemonCard from '../components/PokemonCard'

ChartJS.register(ArcElement, Tooltip, Legend)

const PokemonList: React.FC = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state: any) => state.pokemon)
  const { top5 } = useSelector((state: any) => state.pokemon)
  const { statisticType1 } = useSelector((state: any) => state.pokemon)
  const { statisticType2 } = useSelector((state: any) => state.pokemon)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [selectedPokemon, setSelectedPokemon] = useState<any | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await showAllPokemon()
      dispatch(setDataPokemon(response.result))
    }

    const fetchDataTop5Pokemon = async () => {
      const response = await pokemonTop5()
      dispatch(setTop5Pokemon(response.result))
    }

    const fetchDataStatisticType1 = async () => {
      const response = await pokemonStatisticType1()
      dispatch(setStatisticType1(response.result))
    }

    const fetchDataStatisticType2 = async () => {
      const response = await pokemonStatisticType2()
      dispatch(setStatisticType2(response.result))
    }

    fetchData()
    fetchDataTop5Pokemon()
    fetchDataStatisticType1()
    fetchDataStatisticType2()
  }, [dispatch])

  const handleSelectPokemon = (id: number) => {
    setSelectedId(id)
    fetchPokemonById(id)
  }

  const handleOpenModal = () => {
    fetchPokemonById(selectedId || 0)
  }

  const fetchPokemonById = async (id: number) => {
    try {
      const response = await showPokemonById(id)
      if (response.message) {
        setSelectedPokemon(response.result[0])
      }
    } catch (error) {
      console.error('Error fetching Pokemon by ID:', error)
    }
  }

  const handleCloseModal = () => {
    setSelectedId(null)
    setSelectedPokemon(null)
  }

  const chartDataType1 = {
    labels: statisticType1.map((item: any) => item.type_1),
    datasets: [
      {
        data: statisticType1.map((item: any) => item.total),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF5733'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF5733']
      }
    ]
  }

  const chartDataType2 = {
    labels: statisticType2.map((item: any) => item.type_2),
    datasets: [
      {
        data: statisticType2.map((item: any) => item.total),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF5733'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF5733']
      }
    ]
  }

  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Pokemon Stats Type 1</h2>
          <Pie data={chartDataType1} />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Pokemon Stats Type 2</h2>
          <Pie data={chartDataType2} />
        </div>
      </div>
      <div className="w-1/3 p-4">
        <div className="pokemon-background max-w-md mx-auto overflow-hidden rounded-md shadow-md">
          <div className="bg-gradient-to-r from-pink-400 to-purple-500">
            <h2 className="text-xl font-semibold text-white p-4">Pokemon Go</h2>
          </div>
          <div className="p-4">
            <ul className="list-none p-0 m-0">
              {data.map((item: any, index: number) => (
                <li
                  key={item.id}
                  className={`flex items-center py-4 px-6 ${
                    hoveredId === item.id ? 'bg-blue-200 transform scale-105' : index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'
                  } hover:bg-gray-300 transition relative`}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleSelectPokemon(item.id)}
                >
                  <span
                    className={`text-2xl ${hoveredId === item.id ? 'text-blue-700' : 'text-gray-600'} mr-4 inline-block ${
                      hoveredId === item.id ? 'animate-spin' : ''
                    }`}
                  >
                    &#9733;
                  </span>
                  <span className={`text-lg font-semibold ${hoveredId === item.id ? 'text-blue-700' : ''}`}>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleOpenModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
          >
            Open Modal
          </button>
        </div>
      </div>
      <div className="w-1/3 p-4">
        <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-4 rounded-md shadow-md text-white">
          <h2 className="text-xl font-semibold mb-4">Top 5 Pokemon</h2>
          {top5.map((pokemon: any) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              japaneseName={pokemon.japanese_name}
              totalPoints={pokemon.total_points}
            />
          ))}
        </div>
      </div>
      {selectedPokemon && (
        <Modal isOpen={true} onClose={handleCloseModal}>
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">{selectedPokemon.name}</h2>
            <p className="text-2xl font-semi mb-4">{selectedPokemon.japanese_name}</p>
            <p className="text-2xl font-semi mb-4">{selectedPokemon.german_name}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">ID</p>
                <p className="text-lg font-bold">{selectedPokemon.id}</p>
              </div>
              <div>
                <p className="text-gray-600">Type</p>
                <p className="text-lg font-bold">{`${selectedPokemon.type_1}${
                  selectedPokemon.type_2 ? ` / ${selectedPokemon.type_2}` : ''
                }`}</p>
              </div>
              <div>
                <p className="text-gray-600">Height</p>
                <p className="text-lg font-bold">{`${selectedPokemon.height_m} m`}</p>
              </div>
              <div>
                <p className="text-gray-600">Abilities</p>
                <p className="text-lg font-bold">{`${selectedPokemon.ability_1}${
                  selectedPokemon.ability_2 ? ` / ${selectedPokemon.ability_2}` : ''
                }`}</p>
              </div>
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-8"
              onClick={handleCloseModal}
            >
              Close Modal
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default PokemonList
