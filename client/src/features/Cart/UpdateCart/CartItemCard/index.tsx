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
    image: string;
    amount: number;
  },
  onAmountChange: (id: number, newAmount: number) => void;
}

export const CartItemCard = ({ item, onAmountChange }: CartItemCardProps) => {
  return (
    <div className={Container}>
      <div className={ContentStyle}>
        {/* Product Image */}
        <img src={item.image} alt={item.name} className={ProductImageStyle} />

        {/* Product Info */}
        <div className={ProductInfoStyle}>
          <h3 className={ProductNameStyle}>{item.name}</h3>
          <p className={ProductPriceStyle}>₩{item.price.toLocaleString()}</p>
        </div>

        {/* Amount Controls */}
        <div className={AmountControlsStyle}>
          <button onClick={() => onAmountChange(item.id, item.amount - 1)} className={AmountButtonStyle}>
            <i className="ri-subtract-line" />
          </button>
          <span className={AmountDisplayStyle}>{item.amount}</span>
          <button onClick={() => onAmountChange(item.id, item.amount + 1)} className={AmountButtonStyle}>
            <i className="ri-add-line" />
          </button>
        </div>

        {/* Total Price */}
        <div className={TotalPriceBox}>
          <p className={TotalPriceTextStyle}>₩{(item.price * item.amount).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
