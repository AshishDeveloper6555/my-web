import React, { useState } from 'react'

function FunctionInState() {
    const[username,setUsername] = useState({Name:"MERA NAAM ASHISH H"})
  return (
    <div>
        <h2>{username.Name}</h2>
    </div>
  )
}

export default FunctionInState