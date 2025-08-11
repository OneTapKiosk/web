import { useNavigate } from "react-router";
import NewOrderButton from "./components/NewOrderButton";
import { AutoRedirectNotice, OrderStatusCard, SuccessAnimation, SuccessMessage, ThankYouMessage } from "@/widgets/CompletionPage/index";
import { Container } from "./style.css";
import { useEffect } from "react";

const CompletionPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleNewOrder = () => {
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
