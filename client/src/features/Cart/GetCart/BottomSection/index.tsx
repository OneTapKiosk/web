import { TimerDisplay } from "@/shared/components/TimerDisplay";
import { BackButtonStyle, ButtonBoxStyle, ConfirmButtonStyle, Container, ContentStyle, LeftColumn, PriceAndTimerStyle, RightColumn, TotalPriceLabelStyle, TotalPriceStyle } from "./style.css";

export interface BottomSectionProps {
  totalPrice: number;
  timeLeft: number;
  onConfirm: () => void;
  onBack: () => void;
}

export const BottomSection = ({ totalPrice, timeLeft, onConfirm, onBack }: BottomSectionProps) => {
  return (
    <div className={Container}>
      <div className={LeftColumn}>
        <div className={ContentStyle}>
          <span className={TotalPriceLabelStyle}>총 금액</span>
          <div className={PriceAndTimerStyle}>
            <span className={TotalPriceStyle}>
              ₩{totalPrice.toLocaleString()}
            </span>
          </div>
        </div>
        <div className={ButtonBoxStyle}>
          <button
            onClick={onBack}
            className={BackButtonStyle}
          >
            뒤로가기
          </button>
          <button
            onClick={onConfirm}
            className={ConfirmButtonStyle}
          >
            주문 확인하기
          </button>
        </div>
      </div>
      <div className={RightColumn}>
        <TimerDisplay timeLeft={timeLeft} />
      </div>
    </div>
  );
}
