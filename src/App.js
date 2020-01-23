import React from 'react';
import './App.css';
import Todo from './Todo/Todo.js'
import Generale from './Generale/Generale.js'
 const App=()=> {
  return (
    <div className="App">
     <Todo/>
     <Generale/>
    </div>
  );
}

export default App;
