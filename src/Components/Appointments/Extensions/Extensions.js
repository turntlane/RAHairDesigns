import React, {useState} from 'react'

function Extensions() {
    const [extensionsOpen, setExtensionsOpen] = useState(false)
    return (
        <div>
                          <button onClick={() => setExtensionsOpen(true)} >Extensions</button>
            {extensionsOpen ?   <div className="checkbox">
     <input type="checkbox" id="extensions" name="" value="" />
     <label for="extensions"><span>Extensions</span></label>
  </div> : null}
        </div>
    )
}

export default Extensions
