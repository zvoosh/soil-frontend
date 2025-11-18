import type { TDistributer, TSoil, TUser } from "src/types";

export const registerHook = async (object: TUser) => {
  const res = await fetch(`https://soilbackend.dusanprogram.eu/api/admin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(object),
  });
  if (!res.ok) throw new Error("Failed to register");
  return await res.json();
};

export const loginHook = async (object: {
  username: string;
  password: string;
}) => {
  const res = await fetch(`https://soilbackend.dusanprogram.eu/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(object),
  });
  if (!res.ok) throw new Error("Failed to login");
  return await res.json();
};

export const fetchSoilDetails = async () => {
  const res = await fetch(`https://soilbackend.dusanprogram.eu/api/soil/details`);
  if (!res.ok) throw new Error("Failed to fetch soil details");
  return await res.json();
};

export const fetchDistributerDetails = async () => {
  const res = await fetch(`https://soilbackend.dusanprogram.eu/api/distributer/details`);
  if (!res.ok) throw new Error("Failed to fetch distributer details");
  return await res.json();
};

export const addSoilDetail = async (object: TSoil) => {
  const res = await fetch("https://soilbackend.dusanprogram.eu/api/soil/details", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(object),
  });

  if (!res.ok) throw new Error("Failed to create soil detail");
  return await res.json();
};

export const addDistributerDetail = async (object: TDistributer) => {
  const res = await fetch("https://soilbackend.dusanprogram.eu/api/distributer/details", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(object),
  });

  if (!res.ok) throw new Error("Failed to create distributer detail");
  return await res.json();
};
