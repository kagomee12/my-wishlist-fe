export type User = {
  id: string;
  name: string;
  gender: Gender;
  email: string;
  wishlists?: MyWishlist[];
};

export type Gender = "MALE" | "FEMALE";

export type MyWishlist = {
  id: string;
  items: string;
  isFulfield: boolean;
  ownerId?: number;
  createdAt: string;
};

export type TPromiseResponse<T> = {
  status: string;
  data: T;
  message?: string;
};
