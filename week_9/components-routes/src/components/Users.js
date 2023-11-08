import { BiUserCircle } from "react-icons/bi";

export default function Users({ users }) {
  const renderedUsers = users.map((user) => {
    return (
      <div className="flex-row flex-wrap">
        <div
          key={user.id}
          className="border-dotted rounded-md border-slate-300"
        >
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.location}</p>
        </div>
      </div>
    );
  });

  return <div className="flex justify-between">{renderedUsers}</div>;
}
