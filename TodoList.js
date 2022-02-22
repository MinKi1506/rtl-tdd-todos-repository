import React from 'react';
import TodoItem from './src/TOdoItem';

const TodoList = ({ todos, onToggle, onRemove }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
            ))}
        </ul>
    );
};
export default TodoList;
