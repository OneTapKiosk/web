import { Instruction } from "./components/Instruction";
import { StartButton } from "./components/StartButton";
import WelcomeMessage from "./components/Welcome";
import * as s from "./style.css";

const HomePage = () => {
  const handleStartClick = () => {
    console.log("Start button clicked");
    // Add your start logic here
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
