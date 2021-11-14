import React, { useState } from "react";

function Cuts(props) {
  const [cutOpen, setCutOpen] = useState(false);
  const {service, checked, onChange} = props


  return (
    <div>
      <button onClick={() => setCutOpen(true)}>Cut</button>
      {cutOpen ? (
        <div class="checkbox">
          <input
            type="checkbox"
            id="woments-cut"
            name=""
            checked={checked}
            value={service} 
            onChange={onChange}
          />
          <label for="womens-cut">
            <span>Woments Cut: $55</span>
          </label>
          <input type="checkbox" id="mens-cut" name="" value="" />
          <label for="mens-cut">
            <span>Mens Cut: $30</span>
          </label>
          <input type="checkbox" id="kids-cut" name="" value="" />
          <label for="kids-cut">
            <span>Kids Cut: $15</span>
          </label>
        </div>
      ) : null}
    </div>
  );
}

export default Cuts;
