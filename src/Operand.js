import React from 'react';

export default function Operand({ handleAdd, handleDel, handleSub }) {
  return (
    <div class="operand">
      <div class="operand-block">Level Name</div>
      <div class="action-block">
        <button type="button" onClick={handleAdd}>
          Add
        </button>
        <button type="button" onClick={handleDel}>
          Del
        </button>
        <button type="button" onClick={handleSub}>
          Sub
        </button>
      </div>
    </div>
  );
}
