import React from 'react';
import TodoListItem from './TodoListItem';
import { Todo, MapTodo } from './../Types/index';

interface TodoListProps {
    todos: Todo[],
    mapTodo: MapTodo,
}

const TodoList: React.FC<TodoListProps> = ({ todos, mapTodo }) => {
    return <ol>
        {todos.map(todo => {
            return <TodoListItem todo={todo} mapTodo={mapTodo}  />
        })}
    </ol>
}

export default TodoList;