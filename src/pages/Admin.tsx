// Admin.tsx
import { useState } from "react";
import { useDistributerMutation, useSoilMutation } from "../api/query";

export default function Admin() {
  const [soilData, setSoilData] = useState<{
    name: string;
    soilType: string;
    contact: string;
  }>({
    name: "",
    soilType: "",
    contact: "",
  });

  const [distributerData, setDistributerData] = useState<{
    name: string;
    location: string;
    email: string;
    seed: string;
    soilType: string;
  }>({
    name: "",
    location: "",
    email: "",
    seed: "",
    soilType: "",
  });

  const { mutate: soilMutate } = useSoilMutation();
  const { mutate: distributerMutate } = useDistributerMutation();

  const handleSoilChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSoilData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDistributerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDistributerData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSoilSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(soilData);
    soilMutate(soilData);
  };

  const handleDistributerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    distributerMutate(distributerData);
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-center p-6 md:p-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Admin Dashboard
      </h1>
      <div className="w-full max-w-6xl grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Soil Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
            Post Soil Details
          </h2>

          <form onSubmit={handleSoilSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={soilData.name}
                onChange={handleSoilChange}
                placeholder="Enter soil name"
                className="mb-1 self-start md:self-center w-full rounded border border-gray-200 focus:outline-none px-4 py-2 text-sm"
              />
            </div>
            {/* Soil type */}
            <div>
              <label className="block text-gray-600 mb-1">Soil Type</label>
              <input
                type="text"
                name="soilType"
                value={soilData.soilType}
                onChange={handleSoilChange}
                placeholder="Enter soil type"
                className="mb-1 self-start md:self-center w-full rounded border border-gray-200 focus:outline-none px-4 py-2 text-sm"
              />
            </div>
            {/* Contact */}
            <div>
              <label className="block text-gray-600 mb-1">Contact</label>
              <input
                type="text"
                name="contact"
                value={soilData.contact}
                onChange={handleSoilChange}
                placeholder="Enter contact"
                className="mb-1 self-start md:self-center w-full rounded border border-gray-200 focus:outline-none px-4 py-2 text-sm"
              />
            </div>
            {/* Submit Button */}
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="w-full xl:w-1/3 bg-indigo-600 text-white py-1 rounded-lg text-lg hover:bg-indigo-700 transition"
              >
                Post
              </button>
            </div>
          </form>
        </div>

        {/* Distributor Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-10 xl:mb-0">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
            Post Distributor Details
          </h2>

          <form onSubmit={handleDistributerSubmit} className="space-y-5">
            {/* Distributer Name */}
            <div>
              <label className="block text-gray-600 mb-1">
                Distributor Name
              </label>
              <input
                type="text"
                name="name"
                value={distributerData.name}
                onChange={handleDistributerChange}
                placeholder="Enter distributor name"
                className="mb-1 self-start md:self-center w-full rounded border border-gray-200 focus:outline-none px-4 py-2 text-sm"
              />
            </div>
            {/* Location */}
            <div>
              <label className="block text-gray-600 mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={distributerData.location}
                onChange={handleDistributerChange}
                placeholder="Enter location"
                className="mb-1 self-start md:self-center w-full rounded border border-gray-200 focus:outline-none px-4 py-2 text-sm"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="text"
                name="email"
                value={distributerData.email}
                onChange={handleDistributerChange}
                placeholder="Enter email"
                className="mb-1 self-start md:self-center w-full rounded border border-gray-200 focus:outline-none px-4 py-2 text-sm"
              />
            </div>
            {/* Seed Type */}
            <div>
              <label className="block text-gray-600 mb-1">Seed Type</label>
              <input
                type="text"
                name="seed"
                value={distributerData.seed}
                onChange={handleDistributerChange}
                placeholder="Enter seed type"
                className="mb-1 self-start md:self-center w-full rounded border border-gray-200 focus:outline-none px-4 py-2 text-sm"
              />
            </div>
            {/* Soil Type */}
            <div>
              <label className="block text-gray-600 mb-1">Soil Type</label>
              <input
                type="text"
                name="soilType"
                value={distributerData.soilType}
                onChange={handleDistributerChange}
                placeholder="Enter soil type"
                className="mb-1 self-start md:self-center w-full rounded border border-gray-200 focus:outline-none px-4 py-2 text-sm"
              />
            </div>
            {/* Submit Button */}
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="w-full xl:w-1/3  bg-indigo-600 text-white py-1 rounded-lg text-lg hover:bg-indigo-700 transition"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
