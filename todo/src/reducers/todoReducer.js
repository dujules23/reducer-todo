import { TOGGLE_TODO, ADD_TODO } from '../actions/todoActions'


export const initialState = [{
    item: '',
    completed: false,
    id: Date.now()
  
}]

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            console.log(state)
            return ([...state, {item: action.payload, completed: false, id: new Date()} ]);
        case TOGGLE_TODO:
            return state.map((item) => {
                if (item.id === action.payload){
                    return {...item, completed: !item.completed}
                }
                else {
                    return item
                }
            });
        // case COMPLETED_TODO:
        //     return state;    
        default:
            return state;
    }
    
}

export default todoReducer;