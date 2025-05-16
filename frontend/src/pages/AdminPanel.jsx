import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import axios from 'axios';
import InterviewCard from '@/components/mycomponents/InterviewCard';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const dummyInterviews = [
  { id: 101, role: "Frontend Developer", type: "Technical", date: "2024-12-01", score: 85 },
  { id: 102, role: "Backend Developer", type: "HR", date: "2024-12-05", score: 78 },
  { id: 103, role: "Fullstack Developer", type: "Technical", date: "2024-12-10", score: 91 },
];

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [interviews, setInterviews] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.post("https://intervuai-3id4.onrender.com/admin/fetch-users");
      const data = response.data;
      setUsers(data.users)
      console.log(data)
    } catch (error) {
      setUsers([])
    }
  }

  const fetchInterviews = async () => {
    try {
      const response = await axios.post("https://intervuai-3id4.onrender.com/admin/fetch-interviews");
      const data = response.data;
      setInterviews(data.interviews)
      console.log(data)
    } catch (error) {
      setInterviews([])
    }
  }

  useEffect(() => {
    fetchUsers()
    fetchInterviews()
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      window.location.reload();
      const response = await axios.post("https://intervuai-3id4.onrender.com/admin/del-user", { userid: id });
      toast("user deleted success");
    } catch (error) {
      toast("user deleted error");
    }
  };


  return (
    <div className="p-6 text-white bg-[#1E1E2D] min-h-screen m-auto">
      <div className='max-w-7xl m-auto'>
        <h1 className="text-3xl font-bold mb-6">Admin Panel Dashboard</h1>

        {/* Users Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-300">
              <thead className="bg-[#2A2A3A] text-gray-100">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Created Date</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-700 hover:bg-[#2A2A3A]">
                    <td className="px-4 py-3 font-medium text-white">{user?.fullname}</td>
                    <td className="px-4 py-3">{user?.email}</td>
                    <td className="px-4 py-3">{user?.createdAt.split('T')[0]}</td>
                    <td className="px-4 py-3">
                      <Button
                        variant="destructive"
                        size="sm"
                        className="text-xs px-3 py-1 bg-red-600 hover:bg-red-700"
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Interviews Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Interviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interviews?.map((interview) => (
              <InterviewCard interview={interview} type="admin" />
            ))}
          </div>
        </section>

        <Link to="/">
          <Button className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white font-semibold px-4 py-2 rounded-2xl shadow-lg">
            BACK HOME
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;
