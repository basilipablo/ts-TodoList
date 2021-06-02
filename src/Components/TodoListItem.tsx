import React from 'react';
import { Todo, MapTodo } from './../Types/index';
import './TodoListItem.css'

interface TodoListItemProps {
    todo: Todo,
    mapTodo: MapTodo
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, mapTodo }) => {
    return (<li>
                <label className={todo.complete ? "complete" : undefined}>
                    <input type="checkbox" checked={todo.complete} onChange={() => mapTodo(todo)}/>
                    {todo.text}
                </label>
            </li>)
}

export default TodoListItem;