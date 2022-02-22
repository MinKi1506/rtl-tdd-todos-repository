import React, { useCallback, useState } from 'react';
const Todoform = ({onInsert}) => {
    //이 props 값에 onInsert랑 {onInsert}랑 차이!  => 
    // onInsert는 props 값을(혹은 객체를) onInsert라는 이름으로 정의해서 불러오는거고
    // {onInsert}는 props 값 중, onInsert를 가져온다는 뜻!
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);
    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]);

    return (
        <form onSubmit={onSubmit}>
            <input placeholder='할 일을 입력하세요' value={value} onChange={onChange}/>
            <button type='submit'>등록</button>
        </form>
    )
}

export default Todoform