import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Login = lazy(() => import('./pages/SignIn'))
const PokemonList = lazy(() => import('./pages/PekemonList'))

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/pokemon-list" element={<PokemonList />} />
    </Routes>
  )
}

export default App
