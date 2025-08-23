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
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
  },
  onAmountChange: (id: string, newAmount: number) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export const CartItemCard = ({ item, increaseQuantity, decreaseQuantity }: CartItemCardProps) => {
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
          <button onClick={() => decreaseQuantity(item.id)} className={AmountButtonStyle}>
            <i className="ri-subtract-line" />
          </button>
          <span className={AmountDisplayStyle}>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)} className={AmountButtonStyle}>
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
