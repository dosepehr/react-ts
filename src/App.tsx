import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import { Todo } from './Todos.types';
import Counter from './Counter';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: 1,
            title: 'ts',
            color: 'red',
        },
        {
            id: 2,
            title: 'js',
            color: 'blue',
        },
        {
            id: 3,
            title: 'css',
            color: 'yellow',
        },
    ]);

    return (
        <>
            <ThemeContextProvider>
                <TodoList todos={todos} />
                <Counter />
            </ThemeContextProvider>
        </>
    );
}

export default App;

