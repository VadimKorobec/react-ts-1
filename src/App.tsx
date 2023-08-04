import { useState, useEffect } from "react";
import { Card, CardVariant } from "./components/Card";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./components/List";
import { UserItem } from "./components/UserItem";
import { TodoItem } from "./components/TodoItem";
import { EventsExample } from "./components/EventsExample";

export const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodo] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodo();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const fetchTodo = async () => {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodo(response.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <EventsExample />
      <Card
        width="200px"
        height="200px"
        variant={CardVariant.primary}
        onClick={(num: number) => console.log("click", num)}
      >
        <button>Push Me</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quia
          neque vitae labore eos at culpa, voluptate blanditiis accusamus atque
          enim soluta ea quod aperiam odio ducimus consectetur. Aut, hic?
        </p>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />}
      />
    </>
  );
};
