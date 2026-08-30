export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export function createTodo(id: number, title: string): Todo {
  return {
    id,
    title,
    completed: false,
  };
}

export function getOpenTodos(todos: readonly Todo[]): Todo[] {
  return todos.filter((todo) => !todo.completed);
}

export function completeTodo(todo: Todo): Todo {
  return {
    ...todo,
    completed: true,
  };
}
