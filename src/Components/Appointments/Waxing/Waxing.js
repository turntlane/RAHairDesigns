import React, { useState } from "react";

function Waxing() {
  const [waxingOpen, setWaxingOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setWaxingOpen(true)}>Waxing</button>
      {waxingOpen ? (
        <div class="checkbox">
          <input type="checkbox" id="lips" name="" value="" />
          <label for="lips">
            <span>Lips: $10+</span>
          </label>
          <input type="checkbox" id="chin" name="" value="" />
          <label for="chin">
            <span>Chin: $10+</span>
          </label>
          <input type="checkbox" id="eyebrow" name="" value="" />
          <label for="eyebrow">
            <span>Eyebrow: $10</span>
          </label>
        </div>
      ) : null}
    </div>
  );
}

export default Waxing;
