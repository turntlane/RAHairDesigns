import React, { useState } from "react";

function Cuts({onClick, value }) {

  return (
    <div>
        <div className="checkbox">
          <button value={value} onClick={onClick}>Add</button>
        </div>
    </div>
  );
}

export default Cuts;
