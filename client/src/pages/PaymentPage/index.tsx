import { Header } from "@/shared/components/Header";
import { Container, PaymentMethodBox, RowStyle } from "./style.css";
import TotalPriceCard from "./components/TotalPriceCard";
import { useLocation, useNavigate } from "react-router";
import PaymentMethodCard from "./components/PaymentMethodCard";
import { useState } from "react";
import Notice from "./components/Notice";
import Processing from "./components/Processing";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 };
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [processing, setProcessing] = useState(false);
  
  const handlePaymentSelect = (method: string) => {
    setSelectedMethod(method);
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      localStorage.removeItem('sessionStartTime');
      localStorage.removeItem('lastActivityTime');
      navigate('/completion');
    }, 3000);
  };

  if (processing) return <Processing method={selectedMethod} />

  return (
    <div className={Container}>
      <Header title="결제 방법 선택" backPath="/confirm" />
      <div className={RowStyle}>
        <TotalPriceCard totalPrice={totalPrice} />
        <div className={PaymentMethodBox}>
          <PaymentMethodCard
            type="card"
            title="카드"
            description="신용카드 또는 체크카드로 결제"
            instruction="카드를 리더기에 삽입해주세요"
            iconClass="ri-bank-card-fill"
            color="blue"
            onSelect={handlePaymentSelect}
          />
          <PaymentMethodCard
            type="cash"
            title="현금"
            description="현금으로 결제 (거스름돈 자동 지급)"
            instruction="현금 투입구에 현금을 삽입해주세요"
            iconClass="ri-money-dollar-circle-fill"
            color="green"
            onSelect={handlePaymentSelect}
          />
        </div>
        <Notice />
      </div>
    </div>
  );
}

export default PaymentPage;
