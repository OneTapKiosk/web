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

export interface IncreaseItemQuantityResponse {
  cartItemId: string;
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

    const response = await apiInstance.post<
      BaseApiResponse<IncreaseItemQuantityResponse>
    >(`/cart/${req.cartId}/items`, body);

    return response.data.data;
  } catch (e) {
    console.error("장바구니 상품 수량 증가 실패", e);
    throw e;
  }
};

export const useIncreaseItemQuantity = () => {
  return useMutation({
    mutationFn: increaseItemQuantity,
  });
};
