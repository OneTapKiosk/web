import { Container, DescriptionStyle, TitleStyle, TotalPriceStyle } from "./style.css";

export interface TotalPriceCardProps {
  totalPrice: number;
}

export const TotalPriceCard = ({ totalPrice }: TotalPriceCardProps) => {
  return (
    <div className={Container}>
      <h2 className={TitleStyle}>결제 금액</h2>
      <div className={TotalPriceStyle}>₩{totalPrice.toLocaleString()}</div>
      <p className={DescriptionStyle}>위 금액을 결제해주세요</p>
    </div>
  );
}
