// store.ts
import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './features/pokemonSlice'
import authReducer from './features/authSlice'

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    auth: authReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
