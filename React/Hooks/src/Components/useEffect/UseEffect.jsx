
import React, { useEffect } from 'react'

const UseEffect = () => {
    useEffect(() => {
        console.log("hello useEffect");
    },[])
  return (
    <div>
         <h1>Hello, UseEffect</h1>
    </div>
  )
}

export default UseEffect;
