import React from 'react';
import Todoform from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
    return (
        <div>
            <Todoform />
            <TodoList />
        </div>
    );
};
export default TodoApp;
