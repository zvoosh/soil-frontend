// Register.tsx
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRegisterAdminMutation } from "../../api/query";

interface RegisterFormData {
  fullname: string;
  username: string;
  password: string;
  role: string;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    password: "",
    fullname: "",
    role: "",
  });

  const { mutate: register } = useRegisterAdminMutation();

  const location = useLocation();
  const navigation = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.fullname || !formData.username || !formData.password || !formData.role) {
      alert("Please fill out all fields.");
      return false;
    }
    register(formData);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold">Soil Farming Agent</h1>
        <div className="flex w-1/2 justify-between mt-8 mb-4 text-gray-600">
          <p
            className={`cursor-pointer select-none ${
              location.pathname === "/login" ? "text-black font-bold" : ""
            }`}
            onClick={() => {
              navigation("/login");
            }}
          >
            Login
          </p>
          <p
            className={`cursor-pointer select-none ${
              location.pathname === "/register" ? "text-black font-bold" : ""
            }`}
            onClick={() => {
              navigation("/register");
            }}
          >
            Register
          </p>
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full name */}
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                required
              >
                <option value="" disabled selected>
                  Select a role
                </option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
