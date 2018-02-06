/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';

export const SHOW_TODO = 'SHOW_TODO';

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function showTodoDispatch(text) {
  return { type: SHOW_TODO, text }
}