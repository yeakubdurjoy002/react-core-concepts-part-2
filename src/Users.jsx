import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div
      style={{
        border: "1px solid pink",
        borderRadius: "10px",
        margin: "20px",
      }}
    >
      <h3>Users:{users.length}</h3>
    </div>
  );
}
