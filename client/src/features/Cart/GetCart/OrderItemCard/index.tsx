import { Container, ImageStyle, InfoBox, MetaStyle, NameStyle, TotalStyle } from "./style.css";

export interface OrderItemCardProps {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export const OrderItemCard = ({ id, name, imageUrl, price, quantity }: OrderItemCardProps) => {
  return (
    <div key={id} className={Container}>
      <img src={imageUrl} alt={name} className={ImageStyle} />
      <div className={InfoBox}>
        <h4 className={NameStyle}>{name}</h4>
        <div className={MetaStyle}>
          <span>₩{price.toLocaleString()}</span>
          <span>x</span>
          <span>{quantity}개</span>
        </div>
      </div>
      <div className={TotalStyle}>
        <p>₩{(price * quantity).toLocaleString()}</p>
      </div>
    </div>
  );
}
