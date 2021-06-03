import React from 'react';
import { Todo, MapTodo, DeleteTodo } from './../Types/index';
import './TodoListItem.css'
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

interface TodoListItemProps {
    todo: Todo,
    mapTodo: MapTodo,
    deleteTodo: DeleteTodo
}

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, mapTodo, deleteTodo }) => {

    return (
            <label className={todo.complete ? "complete" : undefined}>
                <h5>{todo.text}</h5>
                <ThemeProvider theme={theme}>
                    <Button onClick={() => mapTodo(todo)} color="primary">Done/Undone</Button>
                </ThemeProvider>
                <Button onClick={() => { deleteTodo(todo) }} variant="outlined">Remove!</Button>
            </label>)
}

export default TodoListItem;