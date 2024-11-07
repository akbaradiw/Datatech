import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { CiUser, CiMail } from "react-icons/ci";

const UserList = ({
  users,
  updateUser,
  editUser,
  setEditUser,
  handleEdit,
  handleDelete,
}) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-6 lg:p-10">
      {users.map((user) => (
        <div key={user.id}>
          {editUser && editUser.id === user.id ? (
            modal && (
              <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded max-w-xs w-full">
                  <input
                    type="text"
                    value={editUser.login}
                    onChange={(e) =>
                      setEditUser({ ...editUser, login: e.target.value })
                    }
                    className="border border-gray-300 rounded w-full p-2 mb-2"
                    placeholder="Edit Username"
                  />

                  <input
                    type="email"
                    value={editUser.email}
                    onChange={(e) =>
                      setEditUser({ ...editUser, email: e.target.value })
                    }
                    className="border border-gray-300 rounded w-full p-2 mb-2"
                    placeholder="Edit Email"
                  />
                  <input
                    type="text"
                    value={editUser.age}
                    onChange={(e) =>
                      setEditUser({ ...editUser, age: e.target.value })
                    }
                    className="border border-gray-300 rounded w-full p-2 mb-2"
                    placeholder="Age"
                  />
                  <select
                    value={editUser.status}
                    onChange={(e) =>
                      setEditUser({ ...editUser, status: e.target.value })
                    }
                    className="border border-gray-300 rounded w-full p-2 mb-4"
                  >
                    <option value="">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>

                  <button
                    onClick={updateUser} 
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                  >
                    Save
                  </button>
                </div>
              </div>
            )
          ) : (
            <div className="border border-gray-300 rounded-md shadow-sm p-4 flex flex-col">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <CiUser className="text-2xl" />
                  <p className="text-sm md:text-base">{user.login}</p>
                </div>
                <div className="flex items-center gap-2">
                  <CiMail className="text-2xl" />
                  <p className="text-gray-600">
                    {user.email || "No email provided"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p>Age:</p>
                  <p className="text-gray-600">{user.age || "Not specified"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>Status:</p>
                  <p className="text-gray-600">{user.status || "Unknown"}</p>
                </div>
              </div>
              <div className="flex justify-end gap-4 pt-4 mt-auto">
                <FaEdit
                  onClick={() => {
                    handleEdit(user);
                    setModal(true);
                  }}
                  className="text-blue-500 cursor-pointer"
                />
                <FaTrash
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500 cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserList;
