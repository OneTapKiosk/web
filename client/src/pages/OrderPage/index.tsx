import { useNavigate } from "react-router";
import { BarcodeScannerInstruction, BottomSection } from "@/widgets/OrderPage/index";
import { CartItemList, getCart } from "@/features/Cart/index";
import { Header } from "@/shared/components/Header"
import { Container, RowStyle } from "./style.css";
import { useEffect, useState } from "react";
import { useTimer } from "@/shared/hooks/useTimer";
import type { CartItem } from "@/shared";
import { useCartStore } from "@/shared/store/cartStore";

const OrderPage = () => {
  const navigate = useNavigate();
  const { timeLeft } = useTimer();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: '바닐라 아이스크림',
      price: 3000,
      quantity: 2,
      imageUrl: 'https://readdy.ai/api/search-image?query=vanilla%20ice%20cream%20cone%20with%20creamy%20white%20vanilla%20scoop%20on%20waffle%20cone%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20appetizing%20and%20fresh%20appearance&width=200&height=200&seq=vanilla-ice-cream&orientation=squarish'
    },
    {
      id: '3',
      name: '초코 아이스크림',
      price: 2000,
      quantity: 2,
      imageUrl: 'https://readdy.ai/api/search-image?query=vanilla%20ice%20cream%20cone%20with%20creamy%20white%20vanilla%20scoop%20on%20waffle%20cone%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20appetizing%20and%20fresh%20appearance&width=200&height=200&seq=vanilla-ice-cream&orientation=squarish'
    },
  ]);
  const cartId = useCartStore((state) => state.cartId);

  useEffect(() => {
    const fetchCart = async () => {
      if (!cartId) {
        console.warn("해당 장바구니가 존재하지 않습니다.");
        return;
      }
      try{
        const cartData = await getCart({ cartId });
        if (cartData) setCartItems(cartData.cartItems);
      } catch(e) {
        console.error("장바구니 데이터를 불러오는 중 오류가 발생했습니다.", e);
      }
    }

    fetchCart();
  }, [cartId]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleConfirm = () => {
    navigate('/confirm', { state: { cartItems } });
  };

  return (
    <div className={Container}>
      <Header title="장바구니" backPath="/" />
      <div className={RowStyle}>
        <BarcodeScannerInstruction />
        <CartItemList
          items={cartItems}
          onAmountChange={updateQuantity}
        />
      </div>
      <BottomSection
        totalPrice={getTotalPrice()}
        timeLeft={timeLeft}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

export default OrderPage;
