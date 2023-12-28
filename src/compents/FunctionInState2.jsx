import React, { useState } from 'react'

function FunctionInState2() {

    const [gujjar,setgujjar] = useState("my name is functionin state 2")
  return (
    <div>
        <h2>{gujjar}</h2>
    </div>
  )
}

export default FunctionInState2