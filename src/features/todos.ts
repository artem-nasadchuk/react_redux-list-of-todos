import { Todo } from '../types/Todo';

type AddAction = {
  type: 'todos/ADD';
  payload: Todo[];
};

const add = (todos: Todo[]): AddAction => ({
  type: 'todos/ADD',
  payload: todos,
});

export const actions = { add };

type State = Todo[];

const todosReducer = (
  state: State = [],
  action: AddAction,
): Todo[] => {
  switch (action.type) {
    case 'todos/ADD':
      return action.payload;

    default:
      return state;
  }
};

export default todosReducer;
