
import type { CartItem } from "@/shared";
import { Container, ColumnStyle, TitleStyle } from "./style.css";
import { OrderItemCard } from "../OrderItemCard";

export interface OrderItemListProps {
  cartItems: CartItem[]
}

export const OrderItemList = ({ cartItems }: OrderItemListProps) => {
  return (
    <div className={Container}>
      <h3 className={TitleStyle}>상품 목록</h3>

      <div className={ColumnStyle}>
        {cartItems.map((item) => (
          <OrderItemCard
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );  
}
