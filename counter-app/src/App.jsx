import { useState } from 'react';

function App(){
  const[count, setCount] = useState(0);
  const[step, stepCount] = useState(1);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <label>
        Step Size:
        <input type="number"  min="1" value={step} onChange={ e => stepCount(Number(e.target.value))}/>
      </label>
      <button onclick= {() => setCount(count + 1)}>+</button>
      <button onclick= {() => setCount(count - 1)}>-</button>
      <button onclick = {() => setCount(0)}>Reset</button>
    </div>
  )
}
export default App;