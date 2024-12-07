import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios"; // For API requests
import { toast } from "react-hot-toast";

const Users = () => {
  const [users, setUsers] = useState([]); // State to store user data

  // Fetch users from the server
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/admin/users"); // Replace with your endpoint
      if (data.success) {
        setUsers(data.users);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to fetch users.");
    }
  };

  // UseEffect to fetch users on component load
  useEffect(() => {
    fetchUsers();
  }, []);

  // Calculate total users (excluding admins)
  const totalUsers = users.filter((user) => user.role !== 1).length;

  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid mt-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 text-center">
            <h1>All Users</h1>
            <h5>Total Users: {totalUsers}</h5> {/* Display total user count */}
            {/* Dynamic Table */}
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.address}</td>
                      <td>{user.role === 1 ? "Admin" : "User"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
