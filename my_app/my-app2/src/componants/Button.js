import React from 'react'

export default function Button() {
    const handleClick= ()=>{
        console.log("button clicked!!")
    }
  return (
    <div>
      <button onClick={handleClick}>click!!!</button>
    </div>
  )
}
