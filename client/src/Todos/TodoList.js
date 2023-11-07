import { useContext, useEffect } from 'react'
import Todo from './Todo'
import { StateContext } from '../context'

export default function TodoList() {
    const { state, dispatch } = useContext(StateContext);
    const { todos } = state;

    useEffect(() => {
    }, [todos, dispatch]);

    return (
        <div>
            {todos.map((todo) => <Todo {...todo} key={todo.id} dispatch={dispatch} />)}
        </div>
    )
}