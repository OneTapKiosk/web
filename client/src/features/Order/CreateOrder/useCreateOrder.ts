import type { BaseApiResponse, OrderItem } from "@/shared";
import apiInstance from "@/shared/api/config";
import { useMutation } from "@tanstack/react-query";

export interface CreateOrderRequest {
  kioskId: string;
  orderItems: OrderItem[];
}

export interface CreateOrderResponse {
  orderId: string;
}

const createOrder = async (req: CreateOrderRequest) => {
  try {
    const response = await apiInstance.post<
      BaseApiResponse<CreateOrderResponse>
    >("/order", req);

    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: createOrder,
  });
};
