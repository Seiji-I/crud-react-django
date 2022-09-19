import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function ItemList() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/items/")
    .then(response => {
      setData(response.data)
    })
    .catch(err => console.log(err))
  }, [])
  console.log(data)
  return (
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>NAME</th>
        </tr>
        {data.map(item => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}