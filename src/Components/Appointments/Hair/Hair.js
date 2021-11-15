import React, {useState} from 'react'

function Hair() {
    const [hairOpen, setHairOpen] = useState(false)
    return (
        <div>
              <button onClick={() => setHairOpen(true)} >Hair</button>
            {hairOpen ?   <div className="checkbox">
     <input type="checkbox" id="color" name="" value="" />
     <label for="color"><span>Color: $75+</span></label>
     <input type="checkbox" id="higlights" name="" value="" />
     <label for="higlights"><span>Highlights: $100+</span></label>
     <input type="checkbox" id="blow-dry" name="" value="" />
     <label for="blow-dry"><span>Blow Dry: $30</span></label>
  </div> : null}
        </div>
    )
}

export default Hair
