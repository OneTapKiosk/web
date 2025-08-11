import { TimerDisplay } from "@/shared/components/TimerDisplay";
import { ConfirmButtonStyle, PriceAndTimerStyle, SummaryContainer, SummaryContentStyle, SummaryLeftColumn, SummaryRightColumn, TotalPriceLabelStyle, TotalPriceStyle } from "./style.css";

export interface OrderSummaryProps {
  totalPrice: number;
  timeLeft: number;
  onConfirm: () => void;
}

export const BottomSection = (props: OrderSummaryProps) => {
  return (
    <div className={SummaryContainer}>
      <div className={SummaryLeftColumn}>
        <div className={SummaryContentStyle}>
          <span className={TotalPriceLabelStyle}>총 금액</span>
          <div className={PriceAndTimerStyle}>
            <span className={TotalPriceStyle}>
              ₩{props.totalPrice.toLocaleString()}
            </span>
          </div>
        </div>
        <button
          onClick={props.onConfirm}
          className={ConfirmButtonStyle}
        >
          주문 확인하기
        </button>
      </div>
      <div className={SummaryRightColumn}>
        <TimerDisplay timeLeft={props.timeLeft} />
      </div>
    </div>
  );
}
