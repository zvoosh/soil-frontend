// SoilDetails.tsx
import { useState } from "react";

const soilDetails = [
  {
    id: 1,
    distributed: "Lola",
    type: "Sandy",
    contact: "123-456-7890",
  },
  {
    id: 2,
    distributed: "Marko",
    type: "Clay",
    contact: "123-456-7890",
  },
  {
    id: 3,
    distributed: "Nick",
    type: "Silty",
    contact: "123-456-7890",
  },
  {
    id: 4,
    distributed: "Justin",
    type: "Peaty",
    contact: "123-456-7890",
  },
  {
    id: 5,
    distributed: "Stefan",
    type: "Chalky",
    contact: "123-456-7890",
  },
  {
    id: 6,
    distributed: "David",
    type: "Loamy",
    contact: "123-456-7890",
  },
  {
    id: 1,
    distributed: "Lola",
    type: "Sandy",
    contact: "123-456-7890",
  },
  {
    id: 2,
    distributed: "Marko",
    type: "Clay",
    contact: "123-456-7890",
  },
  {
    id: 3,
    distributed: "Nick",
    type: "Silty",
    contact: "123-456-7890",
  },
  {
    id: 4,
    distributed: "Justin",
    type: "Peaty",
    contact: "123-456-7890",
  },
  {
    id: 5,
    distributed: "Stefan",
    type: "Chalky",
    contact: "123-456-7890",
  },
  {
    id: 6,
    distributed: "David",
    type: "Loamy",
    contact: "123-456-7890",
  },
];
export default function SoilDetails() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRows = soilDetails.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  return (
    <div className="w-screen h-full">
      <div className="flex justify-center mt-20 2xl:mt-40">
        <div className="w-full 2xl:w-2/3 flex flex-col items-center p-5">
          <h1 className="text-4xl 2xl:text-5xl font-semibold">
            View Soil Details
          </h1>
          <input
            type="text"
            value={searchQuery}
            placeholder="Search..."
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            className="mb-1 mt-10 self-start md:self-center w-full sm:w-1/2 2xl:w-1/2 rounded border border-gray-200 focus:outline-none px-4 py-2 text-sm"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10">
            {filteredRows.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg w-[280px] 2xl:w-[300px] py-4 px-6 "
              >
                <h4 className="mb-5 text-2xl font-semibold">
                  {item.distributed}
                </h4>
                <div className="flex justify-between mb-1 text-gray-500">
                  <p>Soil type</p>
                  <p>{item.type}</p>
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
