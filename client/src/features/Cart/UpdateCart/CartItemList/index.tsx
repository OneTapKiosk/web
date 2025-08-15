import type { CartItem } from '@/shared/types/cart';
import { CartItemCard } from '../CartItemCard';
import { CartContainer, EmptyCartContainer, EmptyCartSubtextStyle, EmptyCartTextStyle } from './style.css';
import { stack } from '@styled-system/patterns';

interface CartProps {
  items: CartItem[];
  onAmountChange: (id: string, newAmount: number) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export const CartItemList = ({ items, increaseQuantity, decreaseQuantity, onAmountChange }: CartProps) => {
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
            <CartItemCard
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              onAmountChange={onAmountChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}
