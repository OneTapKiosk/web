import { useLocation, useNavigate } from "react-router";
import { ConfirmPageContainer, RowStyle } from "./style.css";
import { useTimer } from "@/shared/hooks/useTimer";
import type { CartItem } from "../../features/Cart/UpdateCart/CartItemList";
import { Header } from "@/shared/components/Header";
import { Notice } from "@/widgets/ConfirmPage/index";
import { BottomSection, ProductList, OrderSummary } from "@/features/Cart/index"

const ConfirmPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { timeLeft } = useTimer();

  const cartItems = location.state?.cartItems as CartItem[] || [];

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.amount), 0);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.amount, 0);
  };

  const handleBack = () => {
    navigate(-1);
  }

  const handlePayment = () => {
    navigate('/payment', { state: { cartItems, totalPrice: getTotalPrice() } });
  };


  return (
    <div className={ConfirmPageContainer}>
      <Header title="주문 확인" backPath="/order"/>
        <div className={RowStyle}>
          <OrderSummary getTotalQuantity={getTotalQuantity} getTotalPrice={getTotalPrice} />
          <ProductList cartItems={cartItems} />
          <Notice />
        </div> 
      <BottomSection totalPrice={getTotalPrice()} timeLeft={timeLeft} onConfirm={handlePayment} onBack={handleBack} />
    </div>
  )
}

export default ConfirmPage;
