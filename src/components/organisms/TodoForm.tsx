import React, { useState, useCallback } from 'react';
import { useTodoContext } from 'states/Provider';

const TodoForm: React.FC = () => {
  const [actionItem, setActionItem] = useState('');
  const { createTodo } = useTodoContext();

  const _onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setActionItem(event.target.value);
    },
    [setActionItem]
  );

  const _onClick = useCallback(() => {
    createTodo({ actionItem });
    setActionItem('');
  }, [createTodo, actionItem]);

  return (
    <React.Fragment>
      <input value={actionItem} onChange={_onChange} />
      <button onClick={_onClick} disabled={actionItem.length === 0}>
        Submit
      </button>
    </React.Fragment>
  );
};

export default TodoForm;
