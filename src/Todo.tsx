import React from 'react';
import { Todo as TodoType } from './Todos.types';

const Todo: React.FC<React.PropsWithChildren<TodoType>> = ({
    color,
    id,
    title,
    children,
}) => {
    const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(e.target);
    };
    const styles: React.CSSProperties = {
        color,
        fontSize: '3.5rem',
    };
    return (
        <div style={styles} onClick={clickHandler}>
            {id} : {title}
        </div>
    );
};

export default Todo;
