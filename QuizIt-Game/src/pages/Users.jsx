import React, { useState, useEffect } from "react";

export default function Users() {
  const [Users, setUsers] = useState([]);
  const [newUser, setnewUser] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((e) => {
        console.error("Error fetching users", e);
      });
  }, []);

  const postData = () => {};

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-l from-purple-500 to-violet-800 text-white text-sm sm:text-base pt-20">
      <h2 className="modak-regular text-center text-[24px] mb-4 mt-10">
        Create New User
      </h2>

      <div className="containerCenterDivinDiv">
        <textarea className="modak-regular mb-4 text-black text-[26px] resize-none text-center"></textarea>
      </div>

      <button className="bubbly-button w-40 mx-auto mb-6">Create</button>

      {/* Dropdown for Selecting User */}
      <h2 className="modak-regular text-center text-[24px] mb-4 mt-10">
        Select User
      </h2>
      <select className="px-4 py-2 rounded w-1/2 mx-auto bg-white text-black">
        {Users.map((user, userIndex) => (
          <option key={userIndex} value={user.username}>
            {user.username}
          </option>
        ))}
      </select>
    </div>
  );
}
