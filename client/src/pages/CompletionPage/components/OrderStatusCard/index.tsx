import { Container, HeadingStyle, IconStyle, TextStyle, WrapperStyle } from "./style.css";

const OrderStatusCard = () => {
  return (
    <div className={Container}>
      <h3 className={HeadingStyle}>주문 상태</h3>
      <div className={WrapperStyle}>
        <div className={IconStyle}>
          <i className="ri-check-line text-white" />
        </div>
        <span className={TextStyle}>결제 완료</span>
      </div>
    </div>
  )
}

export default OrderStatusCard;
