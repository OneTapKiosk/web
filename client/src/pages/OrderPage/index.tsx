import { useNavigate } from "react-router";
import { BarcodeScannerInstruction, BottomSection } from "@/widgets/OrderPage/index";
import { CartItemList, getCart, useDecreaseItemQuantity, useDeleteCart, useIncreaseItemQuantity } from "@/features/Cart/index";
import { Header } from "@/shared/components/Header"
import { Container, RowStyle } from "./style.css";
import { useEffect, useState } from "react";
import { useTimer } from "@/shared/hooks/useTimer";
import type { CartItem } from "@/shared";
import { useCartStore } from "@/shared/store/cartStore";

const OrderPage = () => {
  const { mutate: increaseItemQuantity } = useIncreaseItemQuantity();
  const { mutate: decreaseItemQuantity } = useDecreaseItemQuantity();
  const { mutate: deleteCart } = useDeleteCart();
  const navigate = useNavigate();
  const { timeLeft } = useTimer();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '306503678276276224',
      name: '바닐라 아이스크림',
      price: 3000,
      quantity: 0,
      imageUrl: 'https://readdy.ai/api/search-image?query=vanilla%20ice%20cream%20cone%20with%20creamy%20white%20vanilla%20scoop%20on%20waffle%20cone%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20appetizing%20and%20fresh%20appearance&width=200&height=200&seq=vanilla-ice-cream&orientation=squarish',
      productId: '306503678276276224',
    }
  ]);
  const cartId = useCartStore((state) => state.cartId);

  const handleBack = () => {
    deleteCart({ cartId: cartId! });
    navigate("/");
  }

  const handleAddItem = () => {
    const productId = "316983650866565120";
    const existingItem = cartItems.find(item => item.productId === productId);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
      ));

      increaseItemQuantity({
        cartId: cartId!,
        productId: existingItem.productId,
        name: existingItem.name,
        price: existingItem.price,
        quantity: existingItem.quantity + 1,
        imageUrl: existingItem.imageUrl
      });
    } else {
      const newItem: CartItem = {
        id: "1",
        name: '바닐라 아이스크림',
        price: 1500,
        quantity: 1,
        imageUrl: 'https://readdy.ai/api/search-image?query=vanilla%20ice%20cream%20cone&width=200&height=200',
        productId: productId,
      };

      setCartItems(prev => [...prev, newItem]);

      increaseItemQuantity({
        cartId: cartId!,
        productId: newItem.productId,
        name: newItem.name,
        price: newItem.price,
        quantity: newItem.quantity,
        imageUrl: newItem.imageUrl,
      }, {
        onSuccess: (data) => {
          if (!data) {
            console.error("장바구니 아이템 추가 실패: 응답 데이터가 없습니다.");
            return;
          };
          newItem.id = data.cartItemId;
        }
      });
    }
  };

  const handleDecreaseItemQuantity = (cartItemId: string) => {
    setCartItems(cartItems
      .map(item =>
        item.id === cartItemId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0)
    );

    decreaseItemQuantity({
      cartId: cartId!,
      cartItemId: cartItemId
    });
  }

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
      <Header title="장바구니" handleBack={handleBack} />
      <div className={RowStyle}>
        <BarcodeScannerInstruction />
        <CartItemList
          items={cartItems}
          increaseQuantity={handleAddItem}
          decreaseQuantity={handleDecreaseItemQuantity}
          onAmountChange={updateQuantity}
        />
      </div>
      <button onClick={handleAddItem}>
        테스트 상품 추가
      </button>
      <BottomSection
        totalPrice={getTotalPrice()}
        timeLeft={timeLeft}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

export default OrderPage;
