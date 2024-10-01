import React from 'react'

function UserForm({data, updateFieldHandler}) {
  return (
    <div className="form-control">
      <label htmlFor="name">Nome:</label>
      <input 
          type="text" 
          name='text' 
          id='name' 
          value={data.name || ""}
          placeholder='Digite seu nome' 
          onChange={(e) => updateFieldHandler("name", e.target.value)}
          required />

      <label htmlFor="email">Email:</label>
      <input 
          type="text" 
          name='text' 
          id='email' 
          value={data.email || ""}
          placeholder='Digite seu email'
          onChange={(e) => updateFieldHandler("email", e.target.value)} 
          required />
    </div>
  )
}

export default UserForm