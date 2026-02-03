


import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../context/OrderContext";

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        setError("");

        // 🔐 Admin credentials
        if (username === "admin" && password === "admin123") {
            navigate("/admin");
            return;
        }

        // 👤 User credentials
        if (username === "user" && password === "user123") {
            navigate("/home");
            return;
        }

        // ❌ Invalid
        setError("Invalid username or password");

    };

    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-[380px] mx-4 p-6">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-serif font-semibold text-gray-800">
                        Welcome Back
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Please login to continue
                    </p>
                </div>

                {/* Error */}
                {error && (
                    <p className="text-red-500 text-sm text-center mb-3">
                        {error}
                    </p>
                )}

                {/* Username */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder="admin / user"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                <button
                    onClick={handleLogin}
                    className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition"
                >
                    Login
                </button>
                <p className="text-xs text-gray-400 text-center mt-6">
                    © 2026 Your Company. All rights reserved.
                </p>
            </div>
        </div>
    );
}
