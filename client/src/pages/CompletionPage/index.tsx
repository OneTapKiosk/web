import { useNavigate } from "react-router";
import NewOrderButton from "./components/NewOrderButton";
import OrderStatusCard from "./components/OrderStatusCard";
import SuccessAnimation from "./components/SuccessAnimation";
import SuccessMessage from "./components/SuccessMessage";
import { Container } from "./style.css";
import AutoRedirectNotice from "./components/AutoRedirectNotice";
import ThankYouMessage from "./components/ThankyouMessage";
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
