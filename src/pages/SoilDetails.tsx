// SoilDetails.tsx
import { useMemo, useState } from "react";
import { useSoilQuery } from "../api/query";
import type { TSoil } from "../types/types";

export default function SoilDetails() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading } = useSoilQuery();

  const filteredRows = useMemo(() => {
    if (!data) return [];
    return data.filter((row:TSoil) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [data, searchQuery]);


  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-screen h-full">
      <div className="flex justify-center mt-20 2xl:mt-40">
        <div className="w-full 2xl:w-2/3 flex flex-col items-center p-5">
          <h1 className="text-4xl 2xl:text-5xl font-semibold">
            View Soil Details
          </h1>
          {/* Search bar */}
          <input
            type="text"
            value={searchQuery}
            placeholder="Search..."
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            className="mb-1 mt-10 self-start md:self-center w-full sm:w-1/2 2xl:w-1/2 rounded border border-gray-200 focus:outline-none px-4 py-2 text-sm"
          />
          {/* Grid of soil details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10">
            {filteredRows.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg w-[280px] 2xl:w-[300px] py-4 px-6 "
              >
                <h4 className="mb-5 text-2xl font-semibold">
                  {item.name}
                </h4>
                <div className="flex justify-between mb-1 text-gray-500">
                  <p>Soil type</p>
                  <p>{item.soilType}</p>
                </div>
                <div className="flex justify-between mb-5 text-gray-500">
                  <p>Contact</p>
                  <p>{item.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
