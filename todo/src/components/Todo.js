
import { useState, useReducer } from 'react'
import todoReducer from '../reducers/todoReducer'
import actions from '../actions/todoActions'
import  { ADD_TODO } from '../actions/todoActions'


function Todo () {

    const initialState = [{
        item: '',
        completed: false,
        id: Date.now()
      
    }]

    const [state, dispatch] = useReducer(todoReducer, initialState)

    //Component level state, handles keystrokes

    const [todoText, setTodoText] = useState('');

    const handleChanges = e => {
        setTodoText(e.target.value)
        console.log(todoText)
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if (todoText !==''){
        dispatch({ type: ADD_TODO, payload: todoText })
        }
    }

    // const handleClear = e => {
    //     dispatch({type: })
    // }
   
    console.log(state)
    return(
        <div>
            <h1>Todo List</h1>
            
            {state.map((todo) => {
                return(
                <p key={todo.id}>{todo.item}</p>
                )
            })}
            
            <form onSubmit={onSubmit} >
                <input 
                    className="todo-input"
                    type="text"
                    name="todoText"
                    value={todoText}
                    onChange={handleChanges}/>
                <button type="submit">Add Todo Item</button>
            </form>
        </div>
    )
}

export default Todo;