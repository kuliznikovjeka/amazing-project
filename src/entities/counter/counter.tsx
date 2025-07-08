import { useState } from "react";
import './counter.scss';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="title">{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}