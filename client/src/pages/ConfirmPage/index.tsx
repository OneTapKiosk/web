import { useLocation, useNavigate } from "react-router";
import { ConfirmPageContainer, RowStyle } from "./style.css";
import { useTimer } from "@/shared/hooks/useTimer";
import { Header } from "@/shared/components/Header";
import { Notice } from "@/widgets/ConfirmPage/index";
import { BottomSection, OrderItemList, OrderSummary } from "@/features/Cart/index"
import type { CartItem } from "@/shared";
import { useCreateOrder } from "@/features/Order";
import { useOrderStore } from "@/shared/store/orderStore";

const ConfirmPage = () => {
  const { mutate: createOrder } = useCreateOrder();
  const setOrderId = useOrderStore((state) => state.setOrderId);
  const navigate = useNavigate();
  const location = useLocation();
  const { timeLeft } = useTimer();

  const cartItems = location.state?.cartItems as CartItem[] || [];

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleBack = () => {
    navigate("/order");
  }

  const handlePayment = () => {
    createOrder(
      {
        kioskId: "304721601981714432",
        orderItems: cartItems.map(item => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity
        }))
      },
      {
        onSuccess: (data) => {
          setOrderId(data.data!.orderId);
          console.log(setOrderId);
          navigate('/payment', { state: { cartItems, totalPrice: getTotalPrice() } });
        },
      }
    );
  };


  return (
    <div className={ConfirmPageContainer}>
      <Header title="주문 확인" handleBack={handleBack}/>
        <div className={RowStyle}>
          <OrderSummary getTotalQuantity={getTotalQuantity} getTotalPrice={getTotalPrice} />
          <OrderItemList cartItems={cartItems} />
          <Notice />
        </div> 
      <BottomSection totalPrice={getTotalPrice()} timeLeft={timeLeft} onConfirm={handlePayment} onBack={handleBack} />
    </div>
  )
}

export default ConfirmPage;
