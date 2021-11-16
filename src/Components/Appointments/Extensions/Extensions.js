import React, {useState} from 'react'

function Extensions() {
    const [extensionsOpen, setExtensionsOpen] = useState(false)
    return (
        <div>
                          <button onClick={() => setExtensionsOpen(true)} >Extensions</button>
            {extensionsOpen ?   <div className="checkbox">
                Call for pricing
  </div> : null}
        </div>
    )
}

export default Extensions
