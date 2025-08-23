import { useNavigate } from "react-router";
import NewOrderButton from "./components/NewOrderButton";
import { AutoRedirectNotice, OrderStatusCard, SuccessAnimation, SuccessMessage, ThankYouMessage } from "@/widgets/CompletionPage/index";
import { Container } from "./style.css";
import { useEffect } from "react";
import { useDeleteCart } from "@/features/Cart";
import { useCartStore } from "@/shared/store/cartStore";

const CompletionPage = () => {
  const { mutate: deleteCart } = useDeleteCart();
  const navigate = useNavigate();
  const cartId = useCartStore((state) => state.cartId);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      deleteCart({ cartId: cartId! });
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate, deleteCart, cartId]);

  const handleNewOrder = () => {
    deleteCart({ cartId: cartId! });
    navigate('/');
  };

  return (
  <div className={Container}>
    <SuccessAnimation />
    <SuccessMessage />
    <OrderStatusCard />
    <NewOrderButton handleNewOrder={handleNewOrder} />
    <AutoRedirectNotice />
    <ThankYouMessage />
  </div>
);
}

export default CompletionPage;
