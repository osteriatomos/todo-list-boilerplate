import React, { useState } from 'react';
import { useTodoContext } from '../states/Provider';

const TodoForm: React.FC = () => {
  const [text, setText] = useState('');
  const { dispatchActions } = useTodoContext();

  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const _onClick = () => {
    dispatchActions.create({ actionItem: text });
    setText('');
  };

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
