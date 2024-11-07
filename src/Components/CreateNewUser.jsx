import React, { useState } from "react";

const CreateNewUser = ({ createUser, setCreateUser, handleCreateUser }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="grid justify-center pb-10">
      {modal ? (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded max-w-xs w-full">
            <input
              type="text"
              placeholder="Enter Username"
              value={createUser.username}
              onChange={(e) =>
                setCreateUser({ ...createUser, username: e.target.value })
              }
              className="border border-gray-300 rounded w-full p-2 mb-4"
            />
            <input
              type="email"
              placeholder="Enter Email"
              value={createUser.email}
              onChange={(e) =>
                setCreateUser({ ...createUser, email: e.target.value })
              }
              className="border border-gray-300 rounded w-full p-2 mb-4"
            />
            <input
              type="text"
              placeholder="Enter Age"
              value={createUser.Age}
              onChange={(e) =>
                setCreateUser({ ...createUser, Age: e.target.value })
              }
              className="border border-gray-300 rounded w-full p-2 mb-4"
            />
            <select
              value={createUser.status}
              onChange={(e) =>
                setCreateUser({ ...createUser, status: e.target.value })
              }
              className="border border-gray-300 rounded w-full p-2 mb-4"
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <button
              onClick={() => {
                handleCreateUser();
                setModal(false);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-2"
            >
              Add User
            </button>
            <button
              onClick={() => setModal(false)}
              className="bg-gray-300 text-black px-4 py-2 rounded w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="pt-10">
      <button
            className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow-md cursor-pointer"
            onClick={() => setModal(true)}
          >
            Add New User
          </button>
          
        </div>
      )}
    </div>
  );
};

export default CreateNewUser;
