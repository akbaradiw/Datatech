import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateNewUser from "./CreateNewUser";
import UserList from "./UserList";

const User = () => {
  const [users, setUsers] = useState([]);
  const [createUser, setCreateUser] = useState({
    username: "",
    email: "",
    status: "",
    Age: "",
  });
  const [editUser, setEditUser] = useState(null);

  // menampilkan data dari API
  useEffect(() => {
    const UserData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    UserData();
  }, []);

  // Membuat data user baru
  const handleCreateUser = () => {
    try {
      if (
        !createUser.username ||
        createUser.username.trim() === "" ||
        !createUser.email ||
        createUser.email.trim() === "" ||
        !createUser.status ||
        createUser.status.trim() === ""
      ) {
        throw new Error("All fields are required.");
      }

      setUsers([
        ...users,
        {
          id: Date.now(),
          login: createUser.username,
          email: createUser.email,
          status: createUser.status,
          Age: createUser.Age,
        },
      ]);

      setCreateUser({ username: "", email: "", status: "" });
    } catch (error) {
      console.error("Failed to create user:", error.message);
      alert(`Error: ${error.message}`);
    }
  };

  // Menampilkan data user yang akan diedit
  const handleEdit = (user) => {
    setEditUser(user);
  };

  // Mengupdate data user yang telah diedit
  const updateUser = () => {
    if (!editUser || !editUser.id) {
      return;
    }

    setUsers(users.map((user) => (user.id === editUser.id ? editUser : user)));

    setEditUser(null);
    setModal(false);
  };

  // Untuk menghapus data user
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <div className="App">
        <CreateNewUser
          handleCreateUser={handleCreateUser}
          createUser={createUser}
          setCreateUser={setCreateUser}
        />

        <UserList
          users={users}
          setUsers={setUsers}
          editUser={editUser}
          setEditUser={setEditUser}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          updateUser={updateUser}
        />
      </div>
    </>
  );
};

export default User;
