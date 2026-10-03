import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Todo from "./Todo";

test("shows a pending todo and lets the user mark it done", () => {
  const todo = { _id: "1", text: "Learn Docker", done: false };
  const completeTodo = vi.fn();
  const deleteTodo = vi.fn();

  render(<Todo todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />);

  expect(screen.getByText("Learn Docker")).toBeTruthy();
  expect(screen.getByText("This todo is not done")).toBeTruthy();

  fireEvent.click(screen.getByRole("button", { name: /set as done/i }));
  expect(completeTodo).toHaveBeenCalledWith(todo);
});
