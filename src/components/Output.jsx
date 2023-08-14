import React from 'react'
import './Output.css'
const Output =({text}) => {
  return (
    <div className="form-floating mb-3" id='Obox'>
        <input type="text" className='form-control' id="floatingInput" value={text}/>
            </div>

  )
}

export default Output;