import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as usercalls from "../call/user-call";
import { TEditUserProfile, TUserSchema } from "../validators/user-schema";
import { toast } from "react-toastify";

export const getAllUsers = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await usercalls.getUser();
      if (!response) throw new Error("No data received");
      return response;
    },
    retry: 1,
    staleTime: 5000,
  });

  return query;
};

export const getUserById = (id: number) => {
  const query = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const response = await usercalls.getUserById(id);
      if (!response) throw new Error("No data received");
      return response;
    },
    retry: 1,
    staleTime: 5000,
  });

  return query;
};

export const registerUser = () => {
  const mutation = useMutation({
    mutationFn: (data: TUserSchema) => {
      return usercalls.register(
        data.name,
        data.password,
        data.email,
        data.gender
      );
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error: any) => {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message || "Terjadi kesalahan";
        toast.error(errorMessage);
      } else {
        toast.error(error.message || "Terjadi kesalahan");
      }
    },
  });

  return mutation;
};

export const loginUser = () => {
  const userQueryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await usercalls.login(data.email, data.password);
      if (!response) throw new Error("No data received");
      return response;
    },
    onSuccess: (data) => {
      userQueryClient.invalidateQueries({ queryKey: ["me"] });
      toast.success(data.message);
    },
    onError: (error: any) => {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message || "Terjadi kesalahan";
        toast.error(errorMessage);
      } else {
        toast.error(error.message || "Terjadi kesalahan");
      }
    },
  });

  return mutation;
};

export const updateprofileUser = () => {
  const userQueryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: TEditUserProfile) => {
      const response = await usercalls.updateUser(data);
      if (!response) throw new Error("No data received");
      return response;
    },
    onSuccess: (data) => {
      userQueryClient.invalidateQueries({ queryKey: ["me"] });
      toast.success(data.message);
    },
    onError: (error: any) => {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message || "Terjadi kesalahan";
        toast.error(errorMessage);
      } else {
        toast.error(error.message || "Terjadi kesalahan");
      }
    },
  });
  return mutation;
};

export const getMe = () => {
  const query = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const response = await usercalls.getMe();
      if (!response) throw new Error("No data received");

      return response;
    },
    retry: 1,
    staleTime: 5000,
  });

  return query;
};
