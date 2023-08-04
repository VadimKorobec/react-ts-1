import { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: "1px solid lightgrey" }}>
      {user.id}.{user.name} lives in city {user.address.city} on street{" "}
      {user.address.street}
    </div>
  );
};