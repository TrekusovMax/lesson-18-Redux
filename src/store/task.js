import { createAction } from '@reduxjs/toolkit'

const update = createAction('task/updated')
const remove = createAction('task/removed')

export function taskCompleted(id) {
  return update({ id, complited: true })
}
export function titleChanged(id) {
  return update({ id, title: `New title for ${id}` })
}
export function taskDeleted(id) {
  return remove({ id })
}

function taskReduser(state = [], action) {
  switch (action.type) {
    case update.type: {
      const newArray = [...state]
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id,
      )
      newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload }
      return newArray
    }
    case remove.type: {
      const newArray = [...state].filter((el) => el.id !== action.payload.id)
      return newArray
    }
    default:
      return state
  }
}

export default taskReduser
