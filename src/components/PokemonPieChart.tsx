import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

interface PokemonPieChartProps {
  data: any[]
}

const PokemonPieChart: React.FC<PokemonPieChartProps> = ({ data }) => {
  const labels = data.map((item) => item.name)
  const values = data.map((item) => item.generation)

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF5733'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF5733']
      }
    ]
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Pokemon Stats</h2>
      <Pie data={chartData} />
    </div>
  )
}

export default PokemonPieChart
