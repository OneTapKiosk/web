import { InstructionContainer, StepItemStyle, StepListStyle, StepNumberStyle, TitleStyle } from "./style.css"

const steps = [
  "원하는 아이스크림의 바코드를 스캔하세요",
  "장바구니에서 주문을 확인하세요",
  "결제 방법을 선택하고 결제하세요",
]

export const Instruction = () => (
    <div className={InstructionContainer}>
      <h3 className={TitleStyle}>이용 방법</h3>
      <div className={StepListStyle}>
        {steps.map((text, index) => (
          <div key={index} className={StepItemStyle}>
            <span className={StepNumberStyle}>{index + 1}</span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
)
