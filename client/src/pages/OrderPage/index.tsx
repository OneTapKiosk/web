import { useNavigate } from "react-router";
import { BarcodeScannerInstruction } from "./components/BarcodeScannerInstruction";
import Cart, { type CartItem } from "./components/Cart";
import { Header } from "@/shared/components/Header"
import { OrderPageContainer } from "./style.css";
import { useState } from "react";
import BottomSection from "./components/BottomSection";
import { useTimer } from "@/shared/hooks/useTimer";

const OrderPage = () => {
  const navigate = useNavigate();
  const { timeLeft } = useTimer();

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: '바닐라 아이스크림',
      price: 3000,
      amount: 2,
      image: 'https://readdy.ai/api/search-image?query=vanilla%20ice%20cream%20cone%20with%20creamy%20white%20vanilla%20scoop%20on%20waffle%20cone%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20appetizing%20and%20fresh%20appearance&width=200&height=200&seq=vanilla-ice-cream&orientation=squarish'
    },
    {
      id: 2,
      name: '딸기 아이스크림',
      price: 3500,
      amount: 1,
      image: 'https://readdy.ai/api/search-image?query=strawberry%20ice%20cream%20cone%20with%20pink%20strawberry%20scoop%20on%20waffle%20cone%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20fresh%20strawberry%20pieces%20visible&width=200&height=200&seq=strawberry-ice-cream&orientation=squarish'
    },
    {
      id: 3,
      name: '초콜릿 아이스크림',
      price: 3500,
      amount: 3,
      image: 'https://readdy.ai/api/search-image?query=chocolate%20ice%20cream%20cone%20with%20rich%20brown%20chocolate%20scoop%20on%20waffle%20cone%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20premium%20chocolate%20appearance&width=200&height=200&seq=chocolate-ice-cream&orientation=squarish'
    }
  ]);

  const updateAmount = (id: number, newAmount: number) => {
    if (newAmount <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, amount: newAmount } : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.amount), 0);
  };

  const handleConfirm = () => {
    navigate('/confirm', { state: { cartItems } });
  };

  return (
    <div className={OrderPageContainer}>
      <Header title="장바구니" backPath="/" />
      <BarcodeScannerInstruction />
      <Cart
        items={cartItems}
        onAmountChange={updateAmount}
      />
      <BottomSection
        totalPrice={getTotalPrice()}
        timeLeft={timeLeft}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

export default OrderPage;
