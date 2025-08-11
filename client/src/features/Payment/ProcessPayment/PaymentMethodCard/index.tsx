import { ArrowIconBox, Container, DescriptionStyle, IconBox, InfoBox, InstructionBoxStyle, InstructionTextStyle, TitleStyle } from "./style.css";

export interface PaymentMethodCardProps {
  type: 'card' | 'cash';
  title: string;
  description: string;
  instruction: string;
  iconClass: string;
  color: 'blue' | 'green';
  onSelect: (type: 'card' | 'cash') => void;
}

export const PaymentMethodCard = ({
  type, title, description, instruction, iconClass, color, onSelect
}: PaymentMethodCardProps) => {
  return (
    <div onClick={() => onSelect(type)} className={Container({ color })}>
      <div className={IconBox({ color })}>
        <i className={iconClass} />
      </div>
      <div className={InfoBox}>
        <h3 className={TitleStyle}>{title}</h3>
          <p className={DescriptionStyle}>{description}</p>
        <div className={InstructionBoxStyle("blue")}>
          <p className={InstructionTextStyle("blue")}>
            <i className="ri-arrow-right-line" style={{ marginRight: '0.5rem' }} />
            {instruction}
          </p>
        </div>
      </div>
      <div className={ArrowIconBox}>
        <i className="ri-arrow-right-s-line" />
      </div>
    </div>
  )
}
