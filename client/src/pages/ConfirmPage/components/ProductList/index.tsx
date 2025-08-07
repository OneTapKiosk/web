import type { CartItem } from "@/pages/OrderPage/components/Cart";
import { Container, DetailStyle, ImageStyle, ItemStyle, MetaStyle, NameStyle, ColumnStyle, TitleStyle, TotalStyle } from "./style.css";

export interface ProductListProps {
  cartItems: CartItem[]
}

const ProductList = ({ cartItems }: ProductListProps) => {
  return (
    <div className={Container}>
      <h3 className={TitleStyle}>상품 목록</h3>

      <div className={ColumnStyle}>
        {cartItems.map((item) => (
          <div key={item.id} className={ItemStyle}>
            <img src={item.image} alt={item.name} className={ImageStyle} />

            <div className={DetailStyle}>
              <h4 className={NameStyle}>{item.name}</h4>
              <div className={MetaStyle}>
                <span>₩{item.price.toLocaleString()}</span>
                <span>×</span>
                <span>{item.amount}개</span>
              </div>
            </div>

            <div className={TotalStyle}>
              <p>₩{(item.price * item.amount).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
}

export default ProductList;
