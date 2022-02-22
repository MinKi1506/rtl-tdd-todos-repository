import React from 'react';
import TodoItem from './TOdoItem';

const TodoList = ({ todos, onToggle, onRemove }) => {
    return (
        <ul data-testid="TodoLust">
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
            ))}
        </ul>
    );
};
export default TodoList;