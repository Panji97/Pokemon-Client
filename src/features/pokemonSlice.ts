import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  top5: [],
  statisticType1: [],
  statisticType2: []
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setDataPokemon: (state, action) => {
      state.data = action.payload
    },
    setTop5Pokemon: (state, action) => {
      state.top5 = action.payload
    },
    setStatisticType1: (state, action) => {
      state.statisticType1 = action.payload
    },
    setStatisticType2: (state, action) => {
      state.statisticType2 = action.payload
    }
  }
})

export const { setDataPokemon, setTop5Pokemon, setStatisticType1, setStatisticType2 } = pokemonSlice.actions

export default pokemonSlice.reducer
