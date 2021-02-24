import todoReducer from '../reducers/todoReducer'
import { useReducer } from 'react'


function Todo () {

    const initialState = {
        todo: 'Read a Chapter of Favorite book',
        completed: false,
        id: 2
      
      }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    //Component level state if needed 


    return(
        <div>
            Hi
        </div>
    )
}

export default Todo;