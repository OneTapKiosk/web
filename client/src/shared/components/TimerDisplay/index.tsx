import { Container, FlexBoxStyle, IconStyle, LabelStyle, TimeTextStyle } from "./style.css";

interface TimerDisplayProps {
  timeLeft: number;
}

export const TimerDisplay = ({ timeLeft }: TimerDisplayProps) => {
  const getColorClass = () => {
    if (timeLeft <= 30) return Container.red;
    if (timeLeft <= 60) return Container.orange;
    return Container.blue;
  };

  return (
    <div className={getColorClass()}>
      <div className={LabelStyle}>남은 시간</div>
      <div className={FlexBoxStyle}>
        <i className={`ri-time-line ${IconStyle}`} />
        <div>
          <div className={TimeTextStyle}>{timeLeft}</div>
        </div>
      </div>
    </div>
  );
}
