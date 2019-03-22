// Importez votre fichier ActionTypes
// import * as utils from './utils'

// Codez l'action `addTodo` ayant pour paramètre `text`.
export const deleteTodo = (id) => ({
	type: types.DELETE_TODO,
	id,
})
// Codez l'action `editTodo` ayant pour paramètres `id` et `text`.
export const completeTodo = (id) => ({
	type: types.COMPLETE_TODO,
	id,
})
export const completeAllTodos = () => ({
	type: types.COMPLETE_ALL_TODOS,
})
export const clearCompleted = () => ({
	type: types.CLEAR_COMPLETED,
})
// Codez l'action `setVisibilityFilter` ayant pour paramètre `filter`.
