import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortKey, setSortKey] = useState("timestamp");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const feedback = await axios.get('http://localhost:3000/feedback');
        setUsers(feedback.data);
      } catch (err) {
        console.error("Failed to fetch feedback:", err);
      }
    }
    fetchUsers();
  }, []);

  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const filteredUsers = users
    .filter(
      (user) =>
        categoryFilter === "all" ||
        user.category.toLowerCase() === categoryFilter.toLowerCase()
    )
    .sort((a, b) => {
      const aVal = a[sortKey]?.toLowerCase?.() || a[sortKey];
      const bVal = b[sortKey]?.toLowerCase?.() || b[sortKey];
      if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
      if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header + Controls */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">User Feedback</h2>

        <div className="flex gap-4 items-center flex-wrap">
          <select
            onChange={(e) => setCategoryFilter(e.target.value)}
            value={categoryFilter}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Bug Report">Bug Report</option>
            <option value="Feature Request">Feature Request</option>
            <option value="General Feedback">General Feedback</option>
            <option value="Other">Other</option>
          </select>

          <select
            onChange={(e) => toggleSort(e.target.value)}
            value={sortKey}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="username">Sort by Username</option>
            <option value="email">Sort by Email</option>
            <option value="title">Sort by Title</option>
            <option value="category">Sort by Category</option>
            <option value="timestamp">Sort by Date</option>
          </select>

          <button
            onClick={() => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            title="Toggle ascending/descending"
          >
            {sortOrder === "asc" ? "⬆️ Asc" : "⬇️ Desc"}
          </button>
        </div>
      </div>

      {/* Feedback Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredUsers.map((user, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col h-full"
          >
            {/* Name and Timestamp */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-blue-700">{user.username}</span>
              <span className="text-sm text-gray-500">
                {new Date(user.timestamp).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>

            {/* Email */}
            <p className="text-sm text-gray-600 mb-1">{user.email}</p>

            {/* Title and Category */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-semibold text-gray-800 break-words mr-4">
                {user.title || "Untitled"}
              </h3>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full whitespace-nowrap">
                {user.category}
              </span>
            </div>

            {/* Feedback */}
            <div className="max-h-32 overflow-y-auto pr-2 text-gray-700 whitespace-pre-wrap text-sm">
              {user.feedback}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredUsers.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No entries found for this category.
        </div>
      )}
    </div>
  );
}

export default Dashboard;
