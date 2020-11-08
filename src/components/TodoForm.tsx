import React, { useState, useCallback } from 'react';
import { useTodoContext } from '../states/Provider';

const TodoForm: React.FC = () => {
  const [text, setText] = useState('');
  const { dispatchActions } = useTodoContext();

  const _onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    [setText]
  );

  const _onClick = useCallback(() => {
    dispatchActions.create({ actionItem: text });
    setText('');
  }, [setText]);

  return (
    <React.Fragment>
      <input value={text} onChange={_onChange} />
      <button onClick={_onClick} disabled={text.length === 0}>
        Submit
      </button>
    </React.Fragment>
  );
};

export default TodoForm;
