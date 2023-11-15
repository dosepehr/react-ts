import './App.css';
import TodoList, { Todo } from './TodoList';

function App() {
    const todos: Todo[] = [
        {
            id: 1,
            title: 'ts',
        },
        {
            id: 2,
            title: 'js',
        },
        {
            id: 3,
            title: 'css',
        },
    ];

    return <TodoList todos={todos} />;
}

export default App;

