import React from 'react';
import TodoListItem from './TodoListItem';
import { Todo, MapTodo, DeleteTodo } from './../Types/index';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

interface TodoListProps {
    todos: Todo[],
    mapTodo: MapTodo,
    deleteTodo: DeleteTodo
}

const TodoList: React.FC<TodoListProps> = ({ todos, mapTodo, deleteTodo }) => {
    
    return (
    <Container maxWidth="sm">
        <Grid container spacing={3}>
            {todos.map(todo => {
                return <Grid item><TodoListItem todo={todo} mapTodo={mapTodo} deleteTodo={deleteTodo} /></Grid>
            })}
        </Grid>
    </Container>
    );
}

export default TodoList;