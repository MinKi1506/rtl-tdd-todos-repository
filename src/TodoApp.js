import React, { useState, useCallback, useRef } from 'react';
import Todoform from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'TDD 배우기',
            done: true,
        },
        {
            id: 2,
            text: 'react-testing-library 사용하기',
            done: true,
        },
    ]);
    const nextId = useRef(3); //새로 추가 할 항목에서 사용할 id
    const onInsert = useCallback(
        (text) => {
            setTodos(
                todos.concat({
                    id: nextId.current,
                    text,
                    done: false,
                })
            );
            nextId.current += 1;
        },
        [todos]
    );
    const onToggle = useCallback((id) => {
        todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
    });

    return (
        <div>
            <Todoform data-testid="helloworld" onInsert={onInsert} />
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
};
export default TodoApp;
