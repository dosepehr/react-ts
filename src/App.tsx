import './App.css';
import TodoList from './TodoList';
import { Todo } from './Todos.types';
function App() {
    const todos: Todo[] = [
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
    ];

    return <TodoList todos={todos} />;
}

export default App;

