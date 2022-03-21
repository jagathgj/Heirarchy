import React, { useState } from 'react';
import Level from './Level.js';
import './style.css';

export default function App() {
  const [levels, setLevels] = useState([]);

  const handleAdd = () => {
    console.log('adding level');
  };

  const handleDel = () => {
    console.log('deleted level');
  };

  const handleSub = () => {
    console.log('adding sublevel');
  };
  return (
    <div class="app-wrapper">
      <Level
        handleAdd={handleAdd}
        handleDel={handleDel}
        handleSub={handleSub}
      />

      <Level
        handleAdd={handleAdd}
        handleDel={handleDel}
        handleSub={handleSub}
      />
    </div>
  );
}
