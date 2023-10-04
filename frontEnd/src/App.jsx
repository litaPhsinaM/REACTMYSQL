import React from 'react'
import { useEffect } from 'react'

export default function App() {
  useEffect(()=>{
    fetch('http://localhost:8081/branch')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch

  }, [])
  return (
    <div>

    </div>
  )
}
