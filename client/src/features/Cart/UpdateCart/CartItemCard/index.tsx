import {
  AmountButtonStyle,
  AmountControlsStyle,
  AmountDisplayStyle,
  Container,
  ContentStyle,
  ProductImageStyle,
  ProductInfoStyle,
  ProductNameStyle,
  ProductPriceStyle,
  TotalPriceBox,
  TotalPriceTextStyle
} from "./style.css";

export interface CartItemCardProps {
  item: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
  },
  onAmountChange: (id: number, newAmount: number) => void;
}

export const CartItemCard = ({ item, onAmountChange }: CartItemCardProps) => {
  return (
    <div className={Container}>
      <div className={ContentStyle}>
        {/* Product Image */}
        <img src={item.imageUrl} alt={item.name} className={ProductImageStyle} />

        {/* Product Info */}
        <div className={ProductInfoStyle}>
          <h3 className={ProductNameStyle}>{item.name}</h3>
          <p className={ProductPriceStyle}>₩{item.price.toLocaleString()}</p>
        </div>

        {/* Amount Controls */}
        <div className={AmountControlsStyle}>
          <button onClick={() => onAmountChange(item.id, item.quantity - 1)} className={AmountButtonStyle}>
            <i className="ri-subtract-line" />
          </button>
          <span className={AmountDisplayStyle}>{item.quantity}</span>
          <button onClick={() => onAmountChange(item.id, item.quantity + 1)} className={AmountButtonStyle}>
            <i className="ri-add-line" />
          </button>
        </div>

        {/* Total Price */}
        <div className={TotalPriceBox}>
          <p className={TotalPriceTextStyle}>₩{(item.price * item.quantity).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
