import React from 'react';
import { Button } from 'antd';
import './App.css';

const App = () => (
  <div className="App">
    <p>
      <h1>
        { process.env.REACT_APP_NAME }
      </h1>
    </p>
    <Button type="primary">Button</Button>
  </div>
);

export default App;