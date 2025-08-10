import { CartItemCard } from '../CartItemCard';
import { CartContainer, CartItem, EmptyCartContainer, EmptyCartSubtextStyle, EmptyCartTextStyle } from './style.css';
import { stack } from '@styled-system/patterns';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  amount: number;
};

interface CartProps {
  items: CartItem[];
  onAmountChange: (id: number, newAmount: number) => void;
}

export const CartItemList = ({ items, onAmountChange }: CartProps) => {
  return (
    <div className={CartContainer}>
      {items.length === 0 ? (
        <div className={EmptyCartContainer}>
          <i className="ri-shopping-cart-line" />
          <p className={EmptyCartTextStyle}>장바구니가 비어있습니다</p>
          <p className={EmptyCartSubtextStyle}>바코드를 스캔하여 상품을 추가하세요</p>
        </div>
      ) : (
        <div className={stack({ gap: '6' })}>
          {items.map((item) => (
            <CartItemCard item={item} onAmountChange={onAmountChange}/>
          ))}
        </div>
      )}
    </div>
  );
}
