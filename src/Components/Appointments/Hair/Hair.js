import React, {useState} from 'react'

function Hair({value, onClick}) {
    return (
        <div>
            <button value={value} onClick={onClick}>Add</button>
        </div>
    )
}

export default Hair
