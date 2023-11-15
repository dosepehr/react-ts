import React, { useRef, useState, useEffect } from 'react';
import { Todo as TodoType } from './Todos.types';
import Todo from './Todo';
type TodoListProps = {
    todos: TodoType[];
};
const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    const elem = useRef<HTMLInputElement>(null);
    useEffect(() => {
        elem.current?.focus();
    }, []);
    return (
        <>
            <input type='text' placeholder='todoTitle' ref={elem} />
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
