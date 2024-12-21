import { TPromiseResponse, MyWishlist } from "../../types/stores";
import { api } from "../api";

export const getMyWishlist = async (): Promise<
  TPromiseResponse<MyWishlist[]>
> => {
  try {
    const response = await api.get("/wishlist");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMyWishlistById = async (
  id: string
): Promise<TPromiseResponse<MyWishlist>> => {
  try {
    const response = await api.get(`/wishlist/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createMyWishlist = async (
  items: string
): Promise<TPromiseResponse<MyWishlist>> => {
  try {
    const response = await api.post("/wishlist", { items });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMyWishlist = async (
  items: string,
  id: string
): Promise<TPromiseResponse<MyWishlist>> => {
  try {
    const response = await api.patch(`/wishlist/${id}`, { items });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMyWishlist = async (
  id: string
): Promise<TPromiseResponse<MyWishlist>> => {
  try {
    const response = await api.delete(`/wishlist/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatesStatusMyWishlist = async (
  id: string,
  isFulfield: boolean
): Promise<TPromiseResponse<MyWishlist>> => {
  try {
    const response = await api.patch(`/wishlist/status/${id}`, { isFulfield });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMyWishListByUserId = async (
  id: string
): Promise<TPromiseResponse<MyWishlist[]>> => {
  try {
    const response = await api.get(`/wishlist/owner/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
