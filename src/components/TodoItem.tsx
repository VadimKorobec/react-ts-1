import { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <>
      <li
        style={{ padding: 15, border: "1px solid lightgrey", display: "block" }}
      >
        <p>{todo.id}</p>
        <p>{todo.title}</p>
        <input type="checkbox" checked={todo.completed} />
      </li>
    </>
  );
};
