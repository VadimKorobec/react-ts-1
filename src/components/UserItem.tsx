import { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <li
      style={{ padding: 15, border: "1px solid lightgrey", display: "block" }}
    >
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>lives in city {user.address.city}</p>
      <p>on street {user.address.street}</p>
    </li>
  );
};
