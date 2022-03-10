import { createStore } from './createStore'
import { taskReduser } from './taskReduser'

const initialState = [
  { id: 1, title: 'Task 1', complited: false },
  { id: 2, title: 'Task 2', complited: false },
]

export function initialStore() {
  return createStore(taskReduser, initialState)
}
