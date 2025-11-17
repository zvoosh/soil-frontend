import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addDistributerDetail, addSoilDetail, fetchDistributerDetails, fetchSoilDetails, loginHook, registerHook } from "./hooks";
import type { TDistributer, TSoil, TUser } from "src/types";

type UserType = {
  uid: string;
  fullname: string;
  username: string;
  password: string;
  email: string;
  role: string;
};

export const useRegisterAdminMutation = () => {
  return useMutation({
    mutationFn: async (adminData: TUser) => {
      registerHook(adminData);
    },
  });
};

export const useLoginAdminMutation = () => {
  return useMutation<UserType, Error, { username: string; password: string }>({
    mutationFn: loginHook,
    onSuccess: (user) => {
      sessionStorage.setItem("user", JSON.stringify(user))
    },
  });
};

export const useSoilQuery = () => {
  return useQuery({
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
  return useQuery({
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
    },
  });
};