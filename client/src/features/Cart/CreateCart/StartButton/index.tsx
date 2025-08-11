import * as s from './style.css';

interface StartButtonProps {
  onClick: () => void
}

export const StartButton = ({ onClick }: StartButtonProps) => {
  
  
  return (
    <button onClick={onClick} className={s.StartButtonStyle}>
      시작하기
    </button>
  );
}
