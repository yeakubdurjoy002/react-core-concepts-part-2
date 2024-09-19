import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleRemove = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div
      style={{
        border: "2px solid blue",
        borderRadius: "8px",
        margin: "20px",
        padding: "20px",
      }}
    >
      <h3>Counter :{count}</h3>
      <button onClick={handleAdd}>Add</button> <br /> <br />
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
