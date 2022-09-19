import axios from "axios";
import React, { useState } from "react";

export default function CreateForm() {
  const [name, setName] = useState("")
  const handleSubmit = (event) => {
    axios.post("http://localhost:8000/items/", {name: name})
    .then(response => console.log(response))
    .catch(err => console.log(err))
    event.preventDefault();
    console.log(name)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <button>Create</button>
    </form>
  )
}