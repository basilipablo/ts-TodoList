import React, { useState } from 'react';
import { Todo, MapTodo, AddTodo } from './Types/index';
import AddTodoForm from './Components/AddTodoForm'
import TodoList from './Components/TodoList'

const initialTodos: Todo[] = [
  {text:"Set a Data Base for every user", complete: false}, 
  {text:"Create the user log in interface", complete: true}
]

function App() {
  const [todos, setTodos] = useState(initialTodos)

  const mapTodos: MapTodo = ( selectTodo: Todo ) => {
    const newTodos = todos.map(todo => {
      if(todo === selectTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const addTodo: AddTodo = (newTodo: string) => { //string is redundant, but lets leave it as a reminder of what value are we getting, the reason we are using TS in the first place. Reassurance.
    setTodos([
      ...todos,
      {text: newTodo, complete: false}
    ])
  }

  return (
    <React.Fragment>
      <TodoList todos={todos} mapTodo={mapTodos}/>
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
}

export default App;
