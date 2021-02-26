
import { useState, useReducer } from 'react'
import todoReducer, { initialState } from '../reducers/todoReducer'
import actions from '../actions/todoActions'



function Todo () {

    

    const [state, dispatch] = useReducer(todoReducer, initialState)

    //Component level state, handles keystrokes

    const [todoText, setTodoText] = useState('');

    const handleChanges = e => {
        setTodoText(e.target.value)
        console.log(todoText)
    }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     if (todoText !==''){
    //     dispatch({ type: ADD_TODO, payload: todoText })
    //     }
    // }

    // const handleClear = e => {
    //     dispatch({type: })
    // }
   
    console.log(state)
    return(
        <div>
            <h1>Todo List</h1>
            
            {state.map((todo) => {
                return(
                <p onClick={() => actions.toggleTodo('')}key={todo.id}>{todo.item}</p>
                )
            })}
            
            <form>
                <input 
                    className="todo-input"
                    type="text"
                    name="todoText"
                    value={todoText}
                    onChange={handleChanges}/>
                <button onClick={(e) => {
                    e.preventDefault();
                    dispatch(actions.addTodo(todoText))
                    setTodoText('');
                }} 
                    type="submit">
                    Add Todo Item
                </button>
            </form>
        </div>
    )
}

export default Todo;