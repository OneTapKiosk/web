import { Container, ThankYouLine1Style, ThankYouLine2Style } from "./style.css";

export const ThankYouMessage = () => {
  return (
    <div className={Container}>
      <p className={ThankYouLine1Style}>저희 매장을 이용해주셔서</p>
      <p className={ThankYouLine2Style}>감사합니다! 🍦</p>
    </div>
  );
}
