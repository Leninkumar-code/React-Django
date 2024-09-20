
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [count,setcount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
<p>You clicked {count} times</p>

<button onClick={()=>setcount(count+1)} onMouseOver={()=> setcount(count+1)} onMouseOut={()=> setcount(count-1)}>
Click
</button>
</div>
  );
}

export default App;
