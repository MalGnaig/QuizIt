import React from 'react'
import { useState, useEffect } from 'react';

export default function Users() {
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/users')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setUsers(data);
          }).catch((e) => {
            console.error("Error fetching suers", e);
          })
      }, []);

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-l from-purple-500 to-violet-800 text-white text-sm sm:text-base pt-20'>
        <h2>Select user</h2>
        <select>
            {Users.map((user, userIndex) => {
                return (
                    <option key={userIndex} value={user}> 
                    {user.username}
                    </option>
                )
            })}
            
        </select>


        <button> Create New User</button>

    </div>
  )
}
