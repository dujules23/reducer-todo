export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = " TOGGLE_TODO"
// export const COMPLETED_TODO = "COMPLETED_TODO"

export default {
    toggleTodo: (id) => {

     return {type: TOGGLE_TODO, payload: id}
    },

    addTodo: (todo) => {
        
        return {type: ADD_TODO, payload: todo}
    }
}