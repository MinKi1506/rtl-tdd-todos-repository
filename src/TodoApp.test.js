import React, { useCallback } from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoApp from './TodoApp';

describe('<TodoApp />', () => {
    it('renders TodoFrom and TodoList', () => {
        const { getByText, getByTestId } = render(<TodoApp />);
        getByText('등록');
        getByTestId('TodoList');
    });
    it('renders Two defaults todos', () => {
        const { getByText } = render(<TodoApp />);
        getByText('TDD 배우기');
        getByTestId('react-testing-library 사용하기');
    });
    it('create new todo', () => {
        const { getByPlaceholderText, getByText } = render(<TodoApp />);
        fireEvent.change(getByPlaceholderText('할 일을 입력하세요'), {
            target: { value: '새 항목 추가 하기' },
        });
        fireEvent.click(getByText('등록'));
        getByText('새 항목 추가 하기');
    });
    it('toggles todo', () => {
        const { getByText } = render(<TodoApp />);
        const todoText = getByText('TDD 배우기');
        expect(todoText).toHaveStyle('text-decoration: line-through;');
        fireEvent.click(todoText);
        expect(todoText).not.toHaveStyle('text-decoration: line-through;');
    });

    it('remove todo', () => {
        const { getByText } = render();
    });
});
