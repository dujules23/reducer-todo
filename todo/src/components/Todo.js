import todoReducer from '../reducers/todoReducer'
import { useState, useReducer } from 'react'



function Todo () {

    const initialState = {
        todo: 'Read a Chapter of Favorite book',
        completed: false,
        id: 2
      
      }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    //Component level state if needed 

    const [todoText, setTodoText] = useState('');

    return(
        <div>
            <h1>Todo List</h1>
            <form>
                <input 
                    className="todo-input"
                    type="text"
                    name="todoText"
                    value={todoText}
                    onChange={handleChanges}/>
                <button>Add Todo Item</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )
}

export default Todo;