import React from 'react';
import { Todo as TodoType } from './TodoList';

const Todo: React.FC<React.PropsWithChildren<TodoType>> = ({
    id,
    title,
    color,
    children,
}) => {
    const styles: React.CSSProperties = {
        color,
        fontSize: '3.5rem',
    };
    return (
        <div style={styles}>
            {id} : {title}
        </div>
    );
};

export default Todo;
