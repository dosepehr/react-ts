import React, { useState } from 'react';
import { Todo as TodoType } from './Todos.types';
import Todo from './Todo';
type TodoListProps = {
    todos: TodoType[];
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
