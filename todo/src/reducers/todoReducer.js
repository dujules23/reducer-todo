import { TOGGLE_TODO, ADD_TODO } from '../actions/todoActions'


const todoReducer = (state, action) => {
    switch(action.type) {
        case ADD_TODO:
            console.log(state)
            return [...state, {item: action.payload, completed: false, id: new Date()} ];
        case TOGGLE_TODO:
            return {...state, completed: true};
        // case COMPLETED_TODO:
        //     return state;    
        default:
            return state;
    }
    
}

export default todoReducer;