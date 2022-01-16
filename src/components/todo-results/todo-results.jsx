import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    return todos.filter((todo) => todo.checked === true).length;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
