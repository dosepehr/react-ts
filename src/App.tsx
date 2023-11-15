import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import { Todo } from './Components/Todos.types';
import Counter from './Components/Counter';
import { ThemeContextProvider } from './context/ThemeContext';
import { AuthContextProvider } from './context/AuthContext';
import Header from './Components/Header';
import Icon from './Components/Icon';
import Translate from './Components/translate/Translate';

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
                    {/* <Header /> */}
                    {/* <TodoList todos={todos} /> */}
                    {/* <Counter /> */}
                    <Icon children='test Icon' position='center' png />
                    {/* <Translate res='notif-es' /> */}
                </ThemeContextProvider>
            </AuthContextProvider>
        </>
    );
}

export default App;

