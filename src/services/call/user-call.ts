import { Gender, TPromiseResponse, User } from "../../types/stores";
import { api } from "../api";
import { TEditUserProfile } from "../validators/user-schema";

export const login = async (
  email: string,
  password: string
): Promise<TPromiseResponse<string>> => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (
  name: string,
  password: string,
  email: string,
  gender: Gender
): Promise<TPromiseResponse<string>> => {
  try {
    const response = await api.post("/auth/register", {
      name,
      password,
      email,
      gender,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (): Promise<TPromiseResponse<User[]>> => {
  try {
    const response = await api.get("/user");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (
  id: number
): Promise<TPromiseResponse<User>> => {
  try {
    const response = await api.get(`/user/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (
  data: TEditUserProfile
): Promise<TPromiseResponse<string>> => {
  try {
    const response = await api.patch(`/user/edit`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMe = async (): Promise<TPromiseResponse<User>> => {
  try {
    const response = await api.get("/auth/me");

    return response.data;
  } catch (error) {
    throw error;
  }
};
