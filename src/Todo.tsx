import React from 'react';
import { Todo as TodoType } from './TodoList';

const Todo = ({ id, title }: TodoType) => {
    return (
        <div>
            {id} : {title}
        </div>
    );
};

export default Todo;
