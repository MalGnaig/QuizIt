import React, { useState, useEffect } from "react";

export default function Users() {
  const [Users, setUsers] = useState([]);
  const [newUser, setnewUser] = useState();
  const [showNewUserBox, setNewUserBox] = useState(false);
  const [showExistingUserBox, setShowExistingUserBox] = useState(false);
  const [showNewOrExistingButtons, setShowNewOrExistingButtons] =
    useState(true);

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

  const handleNewPlayerClick = () => {
    setNewUserBox(true);
    setShowExistingUserBox(false);
    setShowNewOrExistingButtons(false); // Hide buttons
  };

  const handleExistingPlayerClicks = () => {
    setNewUserBox(false);
    setShowExistingUserBox(true);
    setShowNewOrExistingButtons(false); // Hide buttons
  };

  const submitNewUser = (newUserName) => {
    newUserName.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-l from-purple-500 to-violet-800 text-white text-sm sm:text-base pt-20">
      {showNewOrExistingButtons && (
        <>
          <button
            className="bubbly-button w-40 mx-auto mb-6"
            onClick={handleNewPlayerClick}
          >
            New player
          </button>

          <button
            className="bubbly-button w-40 mx-auto mb-6"
            onClick={handleExistingPlayerClicks}
          >
            Existing player
          </button>
        </>
      )}

      {showNewUserBox && (
        <>
          <h2 className="modak-regular text-center text-[24px] mb-4 mt-10">
            Create New User
          </h2>

          <div className="containerCenterDivinDiv">
            <textarea
              className="modak-regular mb-4 text-black text-[26px] resize-none text-center"
              onChange={(e) => setnewUser(e.target.value)}
            ></textarea>

            <button className="bubbly-button w-40 mx-auto mb-6"> Submit</button>
          </div>
        </>
      )}

      {showExistingUserBox && (
        <>
          <button className="bubbly-button w-40 mx-auto mb-6">Create</button>

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
        </>
      )}
    </div>
  );
}
