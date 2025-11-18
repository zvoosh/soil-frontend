// Home.tsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useDistributersQuery, useSoilQuery } from "../api/query";
import type { TDistributer, TSoil } from "../types/types";

const Heading = () => {
  return (
    <div className="text-center mt-40 w-full">
      <h1 className="text-5xl">Welcome, Dusan</h1>
      <h3 className="text-2xl my-5">Soil menager for applicants</h3>
      <Link
        to={"/info"}
        className="underline text-indigo-500 hover:text-indigo-700"
      >
        View Soil Info
      </Link>
    </div>
  );
};

const SoilDetails = () => {
  const { data, isLoading } = useSoilQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center mt-40">
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl select-none">View Soil Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.map((item: TSoil, index: number) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg w-[300px] py-4 px-6 cursor-pointer select-none"
            >
              <h4 className="mb-5 text-2xl font-semibold">{item.name}</h4>
              <div className="flex justify-between mb-5 text-gray-500">
                <p>Soil type</p>
                <p>{item.soilType}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const tableHead = ["Name", "Location", "Contact", "Seed", "Actions"];

const DistributerDetails = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState<{
    name: string;
    email: string;
    location: string;
    seed: string;
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const { data, isLoading } = useDistributersQuery();

  const filteredRows = useMemo(() => {
    if (!data) return [];
    return data.filter((row: TDistributer) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [data, searchQuery]);

  const paginatedRows = filteredRows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-5 mt-20 pb-10">
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl select-none">View Distributer Details</h3>
      </div>
      <input
        type="text"
        value={searchQuery}
        placeholder="Search..."
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        className="mb-1 w-fit rounded border border-gray-200 focus:outline-none px-4 py-2 text-sm"
      />

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-600">
            <tr>
              {tableHead.map((item, index) => (
                <th className="px-6 py-4" key={index}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-gray-50">
            {paginatedRows.map((item, index) => (
              <tr key={index}>
                <td className="px-10 py-6">{item.name}</td>
                <td className="px-10 py-6">{item.location}</td>
                <td className="px-10 py-6">{item.email}</td>
                <td className="px-10 py-6">{item.seed}</td>
                <td className="px-10 py-6">
                  <div
                    className="text-indigo-500 hover:text-indigo-700 underline cursor-pointer w-fit select-none"
                    onClick={() => setIsOpen(item)}
                  >
                    View
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(128,128,128,0.8)] bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative flex flex-col w-full">
            <button
              onClick={() => setIsOpen(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 select-none cursor-pointer"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Distributer Details</h2>
            <div className="mb-4 flex flex-col gap-2  ">
              <div className="flex justify-between">
                <p className="font-semibold">Name:</p>
                <p>{isOpen.name}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Location:</p>
                <p>{isOpen.location}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Contact:</p>
                <p>{isOpen.email}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Seed:</p>
                <p>{isOpen.seed}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(null)}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 w-fit self-end mt-4 select-none cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center mt-1">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none"
        >
          Prev
        </button>
        <span className="text-sm">
          Page {currentPage} of {Math.ceil(filteredRows.length / rowsPerPage)}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              prev < Math.ceil(filteredRows.length / rowsPerPage)
                ? prev + 1
                : prev
            )
          }
          disabled={currentPage >= Math.ceil(filteredRows.length / rowsPerPage)}
          className="px-4 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="w-screen 2xl:w-2/3 h-full px-5">
      <Heading />
      <SoilDetails />
      <DistributerDetails />
    </div>
  );
}
