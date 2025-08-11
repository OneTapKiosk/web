import { Container, IconStyle, RowStyle, TitleStyle } from "./style.css";

export const Notice = () => {
  return (
    <div className={Container}>
      <i className={IconStyle} />
      <div>
        <h4 className={TitleStyle}>결제 안내</h4>
        <ul className={RowStyle}>
          <li>• 카드 결제: IC칩이 있는 카드를 삽입해주세요</li>
          <li>• 현금 결제: 정확한 금액 또는 큰 단위의 지폐를 넣어주세요</li>
          <li>• 거스름돈은 자동으로 지급됩니다</li>
        </ul>
      </div>
    </div>
  );
}
