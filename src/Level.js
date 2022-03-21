import React, { useState } from 'react';
import Operand from './Operand.js';
import Operator from './Operator.js';

export default function Level({ handleAdd, handleDel, handleSub }) {
  return (
    <div class="level">
      <Operator />
      <Operand
        handleAdd={handleAdd}
        handleDel={handleDel}
        handleSub={handleSub}
      />
    </div>
  );
}
