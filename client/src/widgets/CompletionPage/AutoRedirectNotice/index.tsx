import { Container } from "./style.css";

export const AutoRedirectNotice = () => {
  return (
    <p className={Container}>
      10초 후 자동으로 처음 화면으로 돌아갑니다
    </p>
  );
}
