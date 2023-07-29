import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[],
  setSelectedTodo: (value: Todo) => void,
  selectedTodo: Todo | null,
};

export const TodoList: React.FC<Props> = ({
  todos,
  setSelectedTodo,
  selectedTodo,
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map(todo => (
        <tr
          data-cy="todo"
          className={classNames({
            'has-background-info-light': selectedTodo?.id === todo.id,
          })}
          key={todo.id}
        >
          <td className="is-vcentered">{todo.id}</td>
          <td className="is-vcentered">
            {todo.completed && (
              <span className="icon" data-cy="iconCompleted">
                <i className="fas fa-check" />
              </span>
            )}
          </td>
          <td className="is-vcentered is-expended">
            <p className={classNames({
              'has-text-danger': todo.completed === false,
              'has-text-success': todo.completed,
            })}
            >
              {todo.title}
            </p>
          </td>
          <td className="has-text-right is-vcentered">
            <button
              data-cy="selectButton"
              className="button"
              type="button"
              onClick={() => setSelectedTodo(todo)}
            >
              <span className="icon">
                <i
                  className={classNames('far', {
                    'fa-eye': todo.id !== selectedTodo?.id,
                    'fa-eye-slash': todo.id === selectedTodo?.id,
                  })}
                />
              </span>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);