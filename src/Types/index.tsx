export type Todo = {
    text: string,
    complete: boolean,
}

export type MapTodo = (selectedTodo: Todo) => void;

export type AddTodo = (newTodo: string) => void;

export type DeleteTodo = (selectedTodo: Todo) => void;