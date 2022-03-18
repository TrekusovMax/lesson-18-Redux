import taskReduser from './task'
import { logger } from './middleware/logger'

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import errorReduser from './errors'

const rootReducer = combineReducers({
  errors: errorReduser,
  tasks: taskReduser,
})

function createStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  })
}

export default createStore
