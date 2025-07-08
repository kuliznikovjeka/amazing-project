import { useState } from "react";
import styles from './counter.module.scss';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={styles.title}>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}