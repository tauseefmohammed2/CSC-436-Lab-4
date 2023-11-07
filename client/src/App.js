import { useReducer, useEffect } from 'react';
import CreateTodo from './Todos/CreateTodo';
import TodoList from './Todos/TodoList';
import UserBar from './User/UserBar';
import appReducer from './reducer';
import { StateContext } from './context';
import { useResource } from 'react-request-hook';

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: [],
  });

  const [todosResponse, getTodos] = useResource(() => ({
    url: "/todos",
    method: "get",
  }));

  useEffect(getTodos, []);

  useEffect(() => {
    if (todosResponse && todosResponse.data) {
      dispatch({ type: "FETCH_TODO", todos: todosResponse.data.reverse() });
    }
  }, [todosResponse]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div>
        <UserBar />
        {state.user && <CreateTodo />}
        <TodoList />
      </div>
    </StateContext.Provider>
  );
}

export default App;