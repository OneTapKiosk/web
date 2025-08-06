import { useCreateCart } from "@/features/Cart/index"
import { Instruction } from "./components/Instruction";
import { StartButton } from "./components/StartButton";
import WelcomeMessage from "./components/Welcome";
import * as s from "./style.css";
import { useNavigate } from "react-router";

const HomePage = () => {
  const { mutate: createCart } = useCreateCart();
  const navigate = useNavigate();

  const handleStartClick = () => {
    createCart({ kioskId: 304721601981714432 });

    localStorage.setItem('sessionStartTime', Date.now().toString());
    localStorage.setItem('lastActivityTime', Date.now().toString());
    
    navigate("/order");
  };

  return (
    <div className={s.HomePageContainer}>
      {/* Logo and Welcome */}
      <div className={s.LogoText}>
        logo
      </div>
      <WelcomeMessage />
      <StartButton onClick={handleStartClick} />
      <Instruction />
    </div>
  );
}

export default HomePage;
