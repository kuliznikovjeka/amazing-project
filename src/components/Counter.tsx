import { useState } from 'react'
import classes from './Counter.module.scss';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button className={classes.customButton} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
