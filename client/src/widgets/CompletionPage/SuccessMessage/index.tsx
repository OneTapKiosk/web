import { Container, SubtitleStyle, ThankYouStyle, TitleStyle } from "./style.css";

export const SuccessMessage = () => {
  return (
    <div className={Container}>
      <h1 className={TitleStyle}>주문이 완료되었습니다!</h1>
      <p className={SubtitleStyle}>아이스크림을 가져가세요</p>
      <p className={ThankYouStyle}>감사합니다</p>
    </div>
  );
}
