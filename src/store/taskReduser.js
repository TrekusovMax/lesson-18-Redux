export function taskReduser(state = [], action) {
  switch (action.type) {
    case 'task/updated': {
      const newArray = [...state]
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id,
      )
      newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload }
      return newArray
    }
    case 'task/deleted': {
      const newArray = [...state].filter((el) => el.id !== action.payload.id)
      return newArray
    }
    default:
      return state
  }
}
