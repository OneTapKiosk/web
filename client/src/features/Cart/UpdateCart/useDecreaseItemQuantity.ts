import apiInstance from "@/shared/api/config";
import { useMutation } from "@tanstack/react-query";

export interface DecreaseItemQuantityRequest {
  cartId: string;
  cartItemId: string;
}

const decreaseItemQuantity = async (req: DecreaseItemQuantityRequest) => {
  try {
    const { cartId, cartItemId } = req;

    await apiInstance.delete(`/cart/${cartId}/items/${cartItemId}`);
  } catch (e) {
    console.log("장바구니 상품 수량 감소 실패", e);
  }
};

export const useDecreaseItemQuantity = () => {
  return useMutation({
    mutationFn: decreaseItemQuantity,
  });
};
