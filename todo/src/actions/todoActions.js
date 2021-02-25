export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = " TOGGLE_TODO"


export default {

    toggleTodo: () => {

        return {type: TOGGLE_TODO}
    },

    addTodo: (item) =>{

        return {type: ADD_TODO, payload: item}
    }

    
}