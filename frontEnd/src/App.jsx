import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

export default function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/employee')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])
  return (
    <div style = {{padding: "50px"}}>
      <table>
        <thead>
          <th>emp_id</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>birth_day</th>
          <th>sex</th>
          <th>salary</th>
          <th>super_id</th>
          <th>branch_id</th>
        </thead>
        <tbody>{data.map((d, i) =>(
          <tr key = {i}>
            <td>{d.emp_id}</td>
            <td>{d.first_name}</td>
            <td>{d.last_name}</td>
            <td>{d.birth_day}</td>
            <td>{d.sex}</td>
            <td>{d.salary}</td>
            <td>{d.super_id}</td>
            <td>{d.branch_id}</td>
          </tr>
        ))}</tbody>
      </table>
    </div>
  )
}
