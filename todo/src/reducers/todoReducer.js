


const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADDING_TODO":
            return state;
        case "TOGGLE_TODO":
            return state;
        case "FILTER_COMPLETED_TODO":
            return state;    
        default:
            return state;
    }
    
}

export default todoReducer;