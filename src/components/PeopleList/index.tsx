import { users } from "../../mocks/users";
import { Employee } from "./Employee";

export const PeopleList = () => {
  return (
    <div
      className="flex gap-4 p-4 flex-col items-start justify-items-start bg-background rounded-md w-full"
      style={{
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: "blur( 4px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 ",
      }}
    >
      <h3>People</h3>
      {users.map((user) => (
        <Employee key={user.id} user={user} />
      ))}
    </div>
  );
};
