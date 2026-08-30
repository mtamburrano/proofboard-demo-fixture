import assert from "node:assert/strict";
import test from "node:test";

import { completeTodo, createTodo, getOpenTodos } from "../dist/index.js";

test("createTodo creates an open todo", () => {
  assert.deepEqual(createTodo(1, "Ship the demo"), {
    id: 1,
    title: "Ship the demo",
    completed: false,
  });
});

test("getOpenTodos returns only incomplete todos", () => {
  const todos = [
    createTodo(1, "Write tests"),
    { ...createTodo(2, "Record demo"), completed: true },
    createTodo(3, "Submit project"),
  ];

  assert.deepEqual(
    getOpenTodos(todos).map((todo) => todo.id),
    [1, 3],
  );
});

test("completeTodo marks a todo as completed", () => {
  const todo = createTodo(1, "Ship the demo");

  const completedTodo = completeTodo(todo);

  assert.deepEqual(completedTodo, {
    id: 1,
    title: "Ship the demo",
    completed: true,
  });
  assert.deepEqual(getOpenTodos([completedTodo]), []);
  assert.equal(todo.completed, false);
});
