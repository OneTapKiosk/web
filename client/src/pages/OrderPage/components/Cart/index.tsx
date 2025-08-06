import {  AmountButtonStyle, AmountControlsStyle, AmountDisplayStyle, CartContainer, CartItem, CartItemContentStyle, EmptyCartContainer, EmptyCartSubtextStyle, EmptyCartTextStyle, ProductImageStyle, ProductInfoStyle, ProductNameStyle, ProductPriceStyle, TotalPriceContainer, TotalPriceTextStyle, } from './style.css';
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

export default function Cart({ items, onAmountChange }: CartProps) {
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
            <div key={item.id} className={CartItem}>
              <div className={CartItemContentStyle}>
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className={ProductImageStyle}
                />

                {/* Product Info */}
                <div className={ProductInfoStyle}>
                  <h3 className={ProductNameStyle}>{item.name}</h3>
                  <p className={ProductPriceStyle}>
                    ₩{item.price.toLocaleString()}
                  </p>
                </div>

                {/* Amount Controls */}
                <div className={AmountControlsStyle}>
                  <button
                    onClick={() => onAmountChange(item.id, item.amount - 1)}
                    className={AmountButtonStyle}
                  >
                    <i className="ri-subtract-line" />
                  </button>
                  <span className={AmountDisplayStyle}>{item.amount}</span>
                  <button
                    onClick={() => onAmountChange(item.id, item.amount + 1)}
                    className={AmountButtonStyle}
                  >
                    <i className="ri-add-line" />
                  </button>
                </div>

                {/* Total Price */}
                <div className={TotalPriceContainer}>
                  <p className={TotalPriceTextStyle}>
                    ₩{(item.price * item.amount).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}