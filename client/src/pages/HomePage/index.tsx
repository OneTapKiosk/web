import { useCreateCart, StartButton } from "@/features/Cart/index";
import { Instruction, WelcomeMessage } from "@/widgets/HomePage/index"
import * as s from "./style.css";
import { useNavigate } from "react-router";
import { useCartStore } from "@/shared/store/cartStore";

const HomePage = () => {
  const { mutate: createCart } = useCreateCart();
  const navigate = useNavigate();
  const setCartId = useCartStore((state) => state.setCartId);
  
  const handleStartClick = () => {
    createCart(
      { kioskId: 304721601981714432 },
      {
        onSuccess: (data) => {
          setCartId(data.data.cartId);              
          localStorage.setItem('sessionStartTime', Date.now().toString());
          localStorage.setItem('lastActivityTime', Date.now().toString());
          navigate("/order");
        }
      }
    );
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
