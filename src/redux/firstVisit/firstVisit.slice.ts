import { createSlice } from '@reduxjs/toolkit'

type FirstVisitState = {
  isVisited: boolean
}

let initialState: FirstVisitState = {
  isVisited: !!localStorage.getItem('isVisited')
}

const firstVisitSlice = createSlice({
  name: 'firstVisit',
  initialState,
  reducers: {
    setVisited: (state) => ({ isVisited: false }),
  },
})

export const { setVisited } = firstVisitSlice.actions
export default firstVisitSlice.reducer