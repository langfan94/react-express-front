import { combineReducers } from 'redux'
import { ADD_TODO, SHOW_TODO } from '../action/index.js'

function todos(state = [], action) {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ]
      case SHOW_TODO:
        return ['1112', 'zzz']
      default:
        return state
    }
  }

function showTodo(state = 'welcome to my web', action) {
  switch (action.type) {
    case SHOW_TODO:
      return action.text
    default:
      return state
  }
}



  const todoApp = combineReducers({
    todos,
    showTodo
  })

  export default todoApp