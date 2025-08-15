import type { BaseApiResponse } from "@/shared";
import apiInstance from "@/shared/api/config";
import { useMutation } from "@tanstack/react-query";

export interface IncreaseItemQuantityRequest {
  cartId: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  productId: string;
}

const increaseItemQuantity = async (req: IncreaseItemQuantityRequest) => {
  try {
    const body = {
      name: req.name,
      price: req.price,
      imageUrl: req.imageUrl,
      quantity: req.quantity,
      productId: req.productId,
    };

    await apiInstance.post<BaseApiResponse<void>>(
      `/cart/${req.cartId}/items`,
      body
    );
  } catch (e) {
    console.error("Error creating cart:", e);
    throw e;
  }
};

export const useIncreaseItemQuantity = () => {
  return useMutation({
    mutationFn: increaseItemQuantity,
  });
};
