import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard.jsx";
import Button from "./components/Button.jsx";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Aliyanur", email: "aliya.kaldibay01@gmail.com" },
    { id: 2, name: "Saniya", email: "saniya.galymkyzy@gmail.com" },
    { id: 3, name: "Sofiya", email: "sofiya.kamalova@gmail.com" },
  ]);

  const addDemoUser = () => {
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    setUsers([
      ...users,
      { id, name: `User ${id}`, email: `user${id}@example.com` },
    ]);
  };

  return (
    <div className="container">
      <h1>User List</h1>
      <div className="cards">
        {users.map((u) => (
          <UserCard key={u.id} name={u.name} email={u.email} />
        ))}
      </div>
      <Button text="Add demo user" onClick={addDemoUser} />
    </div>
  );
}

export default App;