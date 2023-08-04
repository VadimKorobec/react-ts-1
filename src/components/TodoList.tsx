import { FC } from "react";
import { ITodo } from "../types/types";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: ITodo[];
}

export const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <ul key={todo.id}>
          <TodoItem todo={todo} />
        </ul>
      ))}
    </>
  );
};
