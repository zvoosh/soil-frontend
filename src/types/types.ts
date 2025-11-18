export type TUser = {
  fullname: string;
  username: string;
  password: string;
  role: string;
};

export type TSoil = {
  id?: string;
  name: string;
  soilType: string;
  contact: string;
};

export type TDistributer = {
  id?: string;
  name: string;
  location: string;
  email: string;
  seed: string;
  soilType: string;
};
