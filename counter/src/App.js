
import './App.css';
import { useState } from 'react';
function App() {
  const [count, setcount] = useState(10)
  const addvaues= (e) =>{
    setcount(count+1);
  }
  const minvaues= (e) =>{
    setcount(count-1);
  }
  console.log(count);
  return (
    <div className="App">
      <header className="App-header">
        <div className='operteur'>
          <div className='count'>Count: {count}</div>
       <button onClick={addvaues} className='add'> add </button>
       <button onClick={minvaues} className='add'> min </button>
       </div>
      </header>
    </div>
  );
}

export default App;
