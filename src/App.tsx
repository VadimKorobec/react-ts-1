import { useState, useEffect } from "react";
import { Card, CardVariant } from "./components/Card";
import { UserList } from "./components/UserList";
import { IUser } from "./types/types";
import axios from "axios";

export const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
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

  return (
    <>
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
      <UserList users={users} />
    </>
  );
};
