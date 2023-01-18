// src/redux/store.ts

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authenticationReducer from './authentication/authentication.slice'
import firstVisitReducer from './firstVisit/firstVisit.slice'
import themeReducer from './theme/theme.slice'

const store = configureStore({
  reducer: combineReducers({
    // your reducers goes here
    authentication: authenticationReducer,
    firstVisit: firstVisitReducer,
    theme: themeReducer
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch

// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export type RootState = ReturnType<typeof store.getState>

export default store
