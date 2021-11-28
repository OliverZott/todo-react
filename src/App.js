import React from 'react';
// import { Button } from 'antd';
import './App.css';
import TodoList from './components/TodoList';

const App = () => (
  <div className="App">

    <p>
      <h1>
        { process.env.REACT_APP_NAME }
      </h1>
    </p>

    <TodoList />

  </div>
);

export default App;