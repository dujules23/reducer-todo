import { TOGGLE_TODO, ADD_TODO } from '../actions/todoActions'


const todoReducer = (state, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {...state, todo: action.payload, completed: false, id: Date.now() };
        case TOGGLE_TODO:
            return {...state, completed: true};
        case "COMPLETED_TODO":
            return state;    
        default:
            return state;
    }
    
}

export default todoReducer;