import React from 'react';
import Todo from './Todo';

export type Todo = {
    id: number;
    title: string;
};

type TodoListProps = {
    todos: Todo[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return (
        <>
            {todos.map((todo) => (
                <Todo {...todo} key={todo.id} />
            ))}
        </>
    );
};

export default TodoList;

// JSX.Element ==> for functional component
// React.ReactNode ==> can be used for string,numbers,more for props.children
// React.FC ==> similar to ReactNode, intelisense for TodoList.[]
