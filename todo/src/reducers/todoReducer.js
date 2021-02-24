


const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {...state};
        case "TOGGLE_TODO":
            return {...state};
        case "COMPLETED_TODO":
            return state;    
        default:
            return state;
    }
    
}

export default todoReducer;