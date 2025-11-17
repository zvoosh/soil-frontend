export type TUser = {
  fullname: string;
  username: string;
  password: string;
  role: string;
};

export type TSoil = {
  name: string;
  soilType: string;
  contact: string;
};

export type TDistributer = {
  name: string;
  location: string;
  email: string;
  seed: string;
  soilType: string;
};
