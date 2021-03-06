import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoList from './TodoList';
import TodoApp from './TodoApp';

describe('<TodoList />', () => {
    const sampleTodos = [
        {
            id: 1,
            text: 'TDD 배우기',
            doen: true,
        },
        {
            id: 2,
            text: 'react-testing-library 사용하기',
            doen: true,
        },
    ];
    it('renders todos properly', () => {
        const { getByText } = render(<TodoList todos={sampleTodos} />);
        getByText(sampleTodos[0].text);
        getByText(sampleTodos[1].text);
    });
    it('calls onToggle and onRemove', () => {
        const onToggle = jest.fn();
        const onRemove = jest.fn();
        const { getByText, getAllByText } = render(
            <TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />
        );
        fireEvent.click(getByText(sampleTodos[0].text));
        expect(onToggle).toBeCalledWith(sampleTodos[0].id);
        fireEvent.click(getAllByText('삭제')[0]);
        expect(onRemove).toBeCalledWith(sampleTodos[0].id);
    });
    it('renders two defaults todos', () => {
        const { getByText } = render(<TodoApp />);
        getByText('TDD 배우기');
        getByText('react-testing-library 사용하기');
    });
});
