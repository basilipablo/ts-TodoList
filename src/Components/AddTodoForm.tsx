import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AddTodo } from './../Types/index';

interface AddTodoFormProps {
    addTodo: AddTodo
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("") //we could put <string> next to useState, but lets just let TS infere it

    const handleChange = (i: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(i.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }

    return (
        <form>
            <input type="text" value={newTodo} onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </form>
    )
}

export default AddTodoForm;