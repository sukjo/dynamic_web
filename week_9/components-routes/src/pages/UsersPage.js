import Users from "../components/Users";

const users = [
  {
    name: "Fee",
    age: "16",
    location: "Seattle",
    id: "123",
  },
  {
    name: "Fi",
    age: "22",
    location: "Orange County",
    id: "139",
  },
  {
    name: "Fo",
    age: "29",
    location: "Miami",
    id: "0953",
  },
  {
    name: "Fum",
    age: "23",
    location: "Anchorage",
    id: "682",
  },
];

export default function UserPage() {
  return (
    <div>
      <Users users={users}></Users>
    </div>
  );
}
