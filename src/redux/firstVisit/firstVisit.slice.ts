import { createSlice } from '@reduxjs/toolkit'

type FirstVisitState = {
  isVisited: boolean
}

const initialState: FirstVisitState = {
  isVisited: localStorage.getItem('isVisited') === 'true'
}

const firstVisitSlice = createSlice({
  name: 'firstVisit',
  initialState,
  reducers: {
    setVisited: (state) => ({ isVisited: !state.isVisited }),
  },
})

export const { setVisited } = firstVisitSlice.actions
export default firstVisitSlice.reducer