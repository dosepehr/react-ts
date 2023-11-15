import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import { Todo } from './Todos.types';
import Counter from './Counter';
import { ThemeContextProvider } from '../context/ThemeContext';
import { AuthContextProvider } from '../context/AuthContext';
import Header from './Header';

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
            <AuthContextProvider>
                <ThemeContextProvider>
                    <Header />
                    <TodoList todos={todos} />
                    <Counter />
                </ThemeContextProvider>
            </AuthContextProvider>
        </>
    );
}

export default App;

