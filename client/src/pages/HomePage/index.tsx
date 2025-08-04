import { useCreateCart } from "@/features/Cart/index"
import { Instruction } from "./components/Instruction";
import { StartButton } from "./components/StartButton";
import WelcomeMessage from "./components/Welcome";
import * as s from "./style.css";

const HomePage = () => {
  const { mutate: createCart } = useCreateCart();
  const handleStartClick = () => {
    createCart({ kioskId: 304721601981714432 });
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
