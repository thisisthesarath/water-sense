"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("https://server-water-sense.onrender.com/admins");
      if (!response.ok) {
        throw new Error("Failed to fetch admin data");
      }

      const admins = await response.json();
      const validAdmin = admins.find(
        (admin: any) => admin.user_id === username && admin.password === password
      );

      if (validAdmin) {
        // Store authentication status and user_id in localStorage
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("loggedInUser", validAdmin.user_id); // Store user_id

        console.log("Logged-in User ID:", validAdmin.user_id); // Debugging log

        router.push("/"); // Redirect to dashboard after login
      } else {
        setError("Invalid username or password!");
      }
    } catch (err) {
      setError("Error logging in. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold text-center mb-4">Login</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="text"
          placeholder="UserID"
          className="w-full px-3 py-2 border rounded mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border rounded mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded mt-2 hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
