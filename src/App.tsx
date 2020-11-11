import React from 'react';
import {Todo} from './features/Todo/Todo'
import { Header } from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Todo />
      </div>
    </div>
  );
}

export default App;
