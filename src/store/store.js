import { createStore } from './createStore'
import taskReduser from './task'

const initialState = [
  { id: 1, title: 'Task 1', complited: false },
  { id: 2, title: 'Task 2', complited: false },
]

function configureStore() {
  return createStore(taskReduser, initialState)
}

export default configureStore
