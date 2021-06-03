import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AddTodo } from './../Types/index';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';

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
        <TextField value={newTodo} onChange={handleChange} />
        <Button startIcon={<ListAltIcon />} type="submit" onClick={handleSubmit} variant="contained" color="primary" >Add Todo</Button>
    </form>
    )
}

export default AddTodoForm;