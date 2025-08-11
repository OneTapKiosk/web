import { Container, DescriptionStyle, SpinnerStyle, TitleStyle } from "./style.css";

export interface ProcessingProps {
  method: string;
} 

export const Processing = ({ method }: ProcessingProps) => {
  return (
    <div className={Container}>
      <div className={SpinnerStyle}></div>
      <h2 className={TitleStyle}>결제 처리 중...</h2>
      <p className={DescriptionStyle}>
        {method === 'card' ? '카드 결제를 처리하고 있습니다' : '현금 결제를 처리하고 있습니다'}
      </p>
    </div>
  );
}
