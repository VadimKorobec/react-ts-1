import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserListProps {
  users: IUser[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          style={{ padding: 15, border: "1px solid lightgrey" }}
        >
          {user.id}.{user.name} lives in city {user.address.city} on street{" "}
          {user.address.street}
        </div>
      ))}
    </>
  );
};
