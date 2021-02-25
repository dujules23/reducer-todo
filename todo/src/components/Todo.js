import todoReducer from '../reducers/todoReducer'
import { useState, useReducer } from 'react'



function Todo () {

    const initialState = {
        item: '',
        completed: false,
        id: ''
      
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    //Component level state, handles keystrokes

    const [todoText, setTodoText] = useState('');

    const handleChanges = e => {
        setTodoText(e.target.value)
    }

    return(
        <div>
            <h1>Todo List</h1>
            <p></p>
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