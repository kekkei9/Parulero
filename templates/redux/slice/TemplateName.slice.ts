import { createSlice } from '@reduxjs/toolkit'

type TemplateNameState = {}

const initialState: TemplateNameState = {}

const templateNameSlice = createSlice({
  name: 'templateName',
  initialState,
  reducers: {
    sampleFun: (state, action) => ({ ...state }),
  },
})

export const { sampleFun } = templateNameSlice.actions
export default templateNameSlice.reducer