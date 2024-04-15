import { User } from "@nextui-org/react";
import { IUser } from "../../types/user.types";

export const Employee = ({ user }: { user: IUser }) => {
  return (
    <User
      style={{
        display: "flex",
        background: "rgba( 255, 255, 255, 0 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.2 )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: "blur( 4px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 ",
      }}
      className="p-2 flex justify-start bg-background w-full"
      key={user.displayName}
      name={user.displayName}
      description={<p>{user.id}</p>}
      avatarProps={{
        src: user.photoURL,
      }}
    />
  );
};
