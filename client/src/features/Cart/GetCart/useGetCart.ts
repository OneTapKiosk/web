import type { BaseApiResponse, CartItem } from "@/shared";
import apiInstance from "@/shared/api/config";

export interface GetCartRequest {
  cartId: string;
}

export interface GetCartResponse {
  id: string;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
  cartItems: CartItem[];
}

export const getCart = async (request: GetCartRequest) => {
  try {
    const { cartId } = request;
    const response = await apiInstance.get<BaseApiResponse<GetCartResponse>>(
      `/cart/${cartId}`
    );

    return response.data.data;
  } catch (e) {
    console.error("장바구니 정보 조회 실패", e);
  }
};
