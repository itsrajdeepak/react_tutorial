import React, { useState } from 'react';

export default function FormHandling() {
  const [formData,setFormData]= useState(
    {
    username:'',
    email:'',
    password:'',
    isSubscribed:'',
    role:''
  }
  )
  const handleChange=(event)=>{
    const{name,value,type,checked}= event.target;
    const fieldValue= type ==='checkbox'?checked: value;
    console.log(name,fieldValue)
  }
  return (
    <>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value=""
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value=""
          />
        </div>

        <div>
          <label htmlFor="isSubscribed">Subscribe:</label>
          <input
            type="checkbox"
            id="isSubscribed"
            name="isSubscribed"
          />
        </div>

        <div>
          <label htmlFor="role">Subscribe:</label>
          <select
            id="role"
            name="role"
            value=""
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="guest">Guest</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
