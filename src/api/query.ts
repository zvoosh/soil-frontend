import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addDistributerDetail,
  addSoilDetail,
  fetchDistributerDetails,
  fetchSoilDetails,
  loginHook,
  registerHook,
} from "./hooks";
import type { TDistributer, TSoil, TUser } from "src/types";
import { useNavigate } from "react-router-dom";

type UserType = {
  uid: string;
  fullname: string;
  username: string;
  password: string;
  email: string;
  role: string;
};

export const useRegisterAdminMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (adminData: TUser) => {
      registerHook(adminData);
    },
    onSuccess: () => {
      navigate("/");
    },
  });
};

export const useLoginAdminMutation = () => {
  const navigate = useNavigate();
  return useMutation<
    { message: string; userData: UserType },
    Error,
    { username: string; password: string }
  >({
    mutationFn: loginHook,
    onSuccess: (user) => {
      sessionStorage.setItem("user", JSON.stringify(user.userData));
      navigate(`/${user.userData.role}/home`);
    },
    onError: () => {
      alert("Invalid username or password");
    },
  });
};

export const useSoilQuery = () => {
  return useQuery<TSoil[]>({
    queryKey: ["soil"],
    queryFn: async () => {
      return fetchSoilDetails();
    },
    staleTime: 5 * 60 * 1000,
    enabled: true,
    retry: 1,
  });
};

export const useDistributersQuery = () => {
  return useQuery<TDistributer[]>({
    queryKey: ["distributers"],
    queryFn: async () => {
      return fetchDistributerDetails();
    },
    staleTime: 5 * 60 * 1000,
    enabled: true,
    retry: 1,
  });
};

export const useSoilMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (object: TSoil) => {
      addSoilDetail(object);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["soil"] });
      alert("Soil detail added successfully");
    },
  });
};

export const useDistributerMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (object: TDistributer) => {
      addDistributerDetail(object);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["distributer"] });
      alert("Distributer added successfully");
    },
  });
};
