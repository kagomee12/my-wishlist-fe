import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as wishlistcalls from "../call/wishlist-call";
import { TWishlist, TWishlistEdit } from "../validators/wishlist-schema";
import { toast } from "react-toastify";

export const getAllWishlist = () => {
  const query = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const response = await wishlistcalls.getMyWishlist();
      if (!response) throw new Error("No data received");
      return response;
    },
    retry: 1,
    staleTime: 5000,
  });
  return query;
};

export const getMyWishlistbyOWnerId = (id: string) => {
  const query = useQuery({
    queryKey: ["wishlist", id],
    queryFn: async () => {
      const response = await wishlistcalls.getMyWishListByUserId(id);
      if (!response) throw new Error("No data received");
      return response;
    },
    retry: 1,
    staleTime: 5000,
  });
  return query;
};

export const getMyWishlistById = (id: string) => {
  const query = useQuery({
    queryKey: ["wishlist", id],
    queryFn: async () => {
      const response = await wishlistcalls.getMyWishlistById(id);
      if (!response) throw new Error("No data received");
      return response;
    },
    retry: 1,
    staleTime: 5000,
  });
  return query;
};

export const deleteMyWishlist = () => {
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationFn: async (id: string) => {
      const response = await wishlistcalls.deleteMyWishlist(id);
      if (!response) throw new Error("No data received");
      return response;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      if (data.status === "success") {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
  });
  return query;
};

export const editMyWishlist = (id: string) => {
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationFn: async (data: TWishlistEdit) => {
      const response = await wishlistcalls.updateMyWishlist(data.items, id);
      if (!response) throw new Error("No data received");
      return response;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      if (data.status === "success") {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
  });
  return query;
};

export const updatedStatusMyWishList = (id: string) => {
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationFn: async (data: { isFulfield: boolean }) => {
      const response = await wishlistcalls.updatesStatusMyWishlist(
        id,
        data.isFulfield
      );
      if (!response) throw new Error("No data received");
      return response;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      if (data.status === "success") {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
  });
  return query;
};

export const createMyWishlist = () => {
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationFn: async (data: TWishlist) => {
      const response = await wishlistcalls.createMyWishlist(data.items);
      if (!response) throw new Error("No data received");
      return response;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      if (data.status === "success") {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
  });
  return query;
};
