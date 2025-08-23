import type { BaseApiResponse } from "@/shared";
import apiInstance from "@/shared/api/config";
import { useMutation } from "@tanstack/react-query";

export interface CreateCartRequest {
  kioskId: string;
}

export interface CreateCartResponse {
  cartId: string;
}

const createCart = async (body: CreateCartRequest) => {
  try {
    const response = await apiInstance.post<
      BaseApiResponse<CreateCartResponse>
    >("/cart", body);

    return response.data;
  } catch (error) {
    console.error("Error creating cart:", error);
    throw error;
  }
};

export const useCreateCart = () => {
  return useMutation({
    mutationFn: createCart,
  });
};
