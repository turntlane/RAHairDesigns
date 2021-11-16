import React, { useState } from "react";

function Waxing({value, onClick}) {
  return (
    <div>
      <button value={value} onClick={onClick}>Add</button>
    </div>
  );
}

export default Waxing;
