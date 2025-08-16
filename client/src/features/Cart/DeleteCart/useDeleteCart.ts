import apiInstance from "@/shared/api/config";
import { useMutation } from "@tanstack/react-query";

export interface DeleteCartRequest {
  cartId: string;
}

export const deleteCart = async (req: DeleteCartRequest) => {
  try {
    await apiInstance.delete(`/cart/${req.cartId}`);
  } catch (e) {
    console.log("장바구니 삭제 실패", e);
  }
};

export const useDeleteCart = () => {
  return useMutation({
    mutationFn: deleteCart,
  });
};
