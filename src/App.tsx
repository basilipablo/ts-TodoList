import React, { useState } from 'react';
import { Todo, MapTodo, AddTodo, DeleteTodo } from './Types/index';
import AddTodoForm from './Components/AddTodoForm';
import TodoList from './Components/TodoList';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';

const initialTodos: Todo[] = [
  {text:"Make a Todo List App", complete: true}, 
  {text:"Make my Todo List App prettier", complete: false}
]

function App() {
  const [todos, setTodos] = useState(initialTodos)
  const [sign, setSign] = useState(false)

  const mapTodos: MapTodo = ( selectTodo: Todo ) => {
    var newTodos = todos.map(todo => {
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

  const deleteTodo: DeleteTodo = (selectTodo: Todo) => {
    var newTodos = todos.filter(todo => 
        todo !== selectTodo
      );
    setTodos(newTodos);
  }

  const addTodo: AddTodo = (newTodo: string) => { //string is redundant, but lets leave it as a reminder of what value are we getting, the reason we are using TS in the first place. Reassurance.
    var findifExists = todos.filter(todo => todo.text === newTodo)
    if(findifExists.length>0) return setSign(!sign)
    if(newTodo.trim() !== ""){
    if(sign)setSign(false)
    setTodos([
      ...todos,
      {text: newTodo, complete: false}
    ])}
  }

  var useStyles = makeStyles({
    root: {
      fontFamily: "'Roboto Mono', monospace",
      background: "linear-gradient(45deg, #184e77, #168aad)",
      borderRadius: "3rem",
      margin: "3rem",
      padding: "1rem",
      boxShadow: "5px 5px 2px 1px grey;"
    },
    hech: {
      margin: "1rem",
      color: "#d9ed92"
    }
  })

  var classDiv = useStyles();

  return (
    <React.Fragment>
      <div className={classDiv.root}>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} mapTodo={mapTodos} deleteTodo={deleteTodo} />
      {sign ? <h1 className={classDiv.hech}>Already Exists</h1> : undefined}
      </div>
    </React.Fragment>
  );
}

export default App;
