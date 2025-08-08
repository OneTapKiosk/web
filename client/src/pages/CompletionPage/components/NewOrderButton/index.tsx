import { Container } from "./style.css";

export interface NewOrderButtonProps {
  handleNewOrder: () => void
}

const NewOrderButton = ({ handleNewOrder }: NewOrderButtonProps) => {
  return (
    <button onClick={handleNewOrder} className={Container}>
      <i className="ri-add-circle-line text-3xl" />
      새로운 주문하기
    </button>
  );
}

export default NewOrderButton;
