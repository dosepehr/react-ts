import React from 'react';
import { Todo as TodoType } from './Todos.types';

const Todo: React.FC<React.PropsWithChildren<TodoType>> = ({
    color,
    id,
    title,
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
