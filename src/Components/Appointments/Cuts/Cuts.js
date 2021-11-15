import React, { useState } from "react";

function Cuts({ type = "checkbox", name, value, onChange }) {

  return (
    <div>
        <div className="checkbox">
          <input type={type} name={name} value={value} onChange={onChange} />
        </div>
    </div>
  );
}

export default Cuts;
