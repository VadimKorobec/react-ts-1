import React, { FC } from "react";
import { IUser } from "../types/types";
import { UserItem } from "./UserItem";

interface UserListProps {
  users: IUser[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <ul key={user.id}>
          <UserItem user={user} />
        </ul>
      ))}
    </>
  );
};
