import { Container, QuantityStyle, RowStyle, TitleStyle, TotalBoxStyle, TotalLabelStyle, TotalPriceStyle, TotalRowStyle } from "./style.css";

interface OrderSummaryProps {
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
}

export const OrderSummary = ({ getTotalQuantity, getTotalPrice }: OrderSummaryProps) => {  
  return (
      <div className={Container}>
        <h2 className={TitleStyle}>주문 내역</h2>

        <div className={RowStyle}>
          <span>총 상품 수량</span>
          <span className={QuantityStyle}>{getTotalQuantity()}개</span>
        </div>

        <div className={TotalBoxStyle}>
          <div className={TotalRowStyle}>
            <span className={TotalLabelStyle}>총 결제 금액</span>
            <span className={TotalPriceStyle}>₩{getTotalPrice().toLocaleString()}</span>
          </div>
        </div>
      </div>
  );
};
